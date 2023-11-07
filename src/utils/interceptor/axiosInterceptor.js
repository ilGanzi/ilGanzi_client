import axios from "axios";
import useUserDataStore from "../store/store";

const { loginData, userData } = useUserDataStore();

const authApi = axios.create({
    baseURL: 'https://ilganziback-lvwun.run.goorm.site', // API 기본 URL 설정
    timeout: 5000,
  });

authApi.interceptors.request.use(async (config) => {
    const accessToken = userData.token.access;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  }, error => {
    return Promise.reject(error);
  });