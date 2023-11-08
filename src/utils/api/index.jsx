import axios from "axios";
import { login, setAccessToken } from "../store/reducer/user";
import { useNavigate } from "react-router-dom";
import { noAuthApi } from "../interceptor/axiosInterceptor";

class UserApi {
    static async postLogin(email,pw){
        try{
            const loginData = {
                email: email,
                password: pw,
            };
            const response = await noAuthApi.post(`https://ilganziback-lvwun.run.goorm.site/api/accounts/auth/`,loginData);
            const accessToken = response.data.token.access
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
            console.log("login success");
            return response.data
        } catch(error){
            console.error(error)
        }
    };
    static async postRegister(email,pw) {
        try{
            const registerData = {
                email: email,
                password: pw
            };
            const response = await axios.get(`/api/accounts/register/`, registerData)
        } catch(error){
            console.error(error);
        }
    }

    static async deleteLogout(email,pw){
        try{
            const logoutData = {
                email: email,
                password: pw
            };
        } catch(error){
            console.error(error);
        }
    }

    static async postRefresh() {
        try{
            const tokenData = {
                refresh: tokenData
            };
            const response = await axios.post(`/api/accounts/auth/refresh/`,tokenData)
        } catch(error){
            console.error(error);
        }
    }
}

export default UserApi;