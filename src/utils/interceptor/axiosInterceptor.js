// axiosInterceptor.js
import axios from 'axios';
import store from '../store';
import { login, setAccessToken } from '../store/reducer/user';


const apicall = axios.create({
  baseURL: 'https://ilganziback-lvwun.run.goorm.site', // API 기본 URL 설정
  timeout: 5000,
  headers: {
    Authorization : axios.defaults.headers.common.Authorization,
  }
});

// 토큰 넣어서 보내는 요청 인터셉터 설정
apicall.interceptors.request.use(async (config) => {
  const refreshToken = localStorage.getItem('refToken');
  const accToken = axios.defaults.headers.common.Authorization;
  // 엑세스 토큰이 없는 경우에만 리프레시 시도
  if (!accToken && refreshToken) {
    try {
      const refreshResponse = await axios.post('/api/accounts/auth/refresh/', {
        refresh: refreshToken
      });
      const newAccessToken = refreshResponse.data.access;
      
      if (newAccessToken) {
        config.headers.Authorization = `Bearer ${newAccessToken}`;
      }
    } catch (error) {
      // 리프레시 토큰을 사용해 엑세스 토큰을 갱신하는 중에 에러가 발생할 수 있으므로 처리가 필요
      console.error(error);
    }
  }

  return config;
});


// 응답 인터셉터 설정
apicall.interceptors.response.use(
    response => response, //그대로 response로 내보냄
    async error => {
        const originalRequest = error.config;
        const refreshToken = localStorage.getItem("refToken")

      if (error.response.status === 401 && !originalRequest._retry && refreshToken) {
        originalRequest._retry = true;
        try {
          // 리프레시 토큰으로 새로운 엑세스 토큰 발급 받기
          const refreshResponse = await apicall.post('/api/accounts/auth/refresh/', {
            refresh: refreshToken
          });
          const accessToken = refreshResponse.data.access;
          
          // 변경된 토큰을 요청 헤더에 추가하여 재시도
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          console.log("401에러로 재요청")
          return apicall(originalRequest);
        } catch (refreshError) {
            console.log("401 갱신 실패")
          // 리프레시 토큰 갱신 실패 시 로그아웃 등의 처리
          // 예: store.dispatch(logoutAction());
          return Promise.reject(refreshError);
        }
      }
     
      if (error.response.status === 403 && refreshToken) {
        try {
          // 리프레시 토큰으로 새로운 엑세스 토큰 발급 받기
          const refreshResponse = await apicall.post('/api/accounts/auth/refresh/', {
            refresh: refreshToken
          });
          const accessToken = refreshResponse.data.access
          
          // 변경된 토큰을 요청 헤더에 추가하여 재시도
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return apicall(originalRequest);
        } catch (refreshError) {
          console.log('403 갱신 실패');
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );
  
  
export { apicall };