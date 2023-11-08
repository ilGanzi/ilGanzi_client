// axiosInterceptor.js
import axios from 'axios';
import store from '../store';
import { useDispatch, useSelector} from 'react-redux';
import { login, setAccessToken } from '../store/reducer/user';


const authApi = axios.create({
  baseURL: 'https://ilganziback-lvwun.run.goorm.site', // API 기본 URL 설정
  timeout: 5000,
});

// 토큰 넣어서 보내는 요청 인터셉터 설정
apicall.interceptors.request.use(async (config) => {    
  return config;
}, error => {
  return Promise.reject(error);
});

// 응답 인터셉터 설정
apicall.interceptors.response.use(
    response => response, //그대로 response로 내보냄
    async error => {
        const originalRequest = error.config;
        const userData = useSelector((state) => state.user)
        const refreshToken = userData.value.refreshToken        

      if (error.response.status === 401 && !originalRequest._retry && refreshToken) {
        originalRequest._retry = true;
        try {
          // 리프레시 토큰으로 새로운 엑세스 토큰 발급 받기
          const refreshResponse = await apicall.post('/api/accounts/auth/refresh/', {
            refresh: refreshToken
          });
          
          axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
          
          // 변경된 토큰을 요청 헤더에 추가하여 재시도
          originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.access}`;
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
          
          axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
          
          // 변경된 토큰을 요청 헤더에 추가하여 재시도
          originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.access}`;
          return apicall(originalRequest);
          
        } catch (refreshError) {
          console.log('403 갱신 실패');
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    }
  );

const noAuthApi = axios.create({
    baseURL: 'https://ilganziback-lvwun.run.goorm.site', // API 기본 URL 설정
    timeout: 5000,
  });

noAuthApi.interceptors.response.use(
    response => response,
    async error => {
      // 에러 처리 로직
      return Promise.reject(error);
    }
  );
  
  
export {apicall};