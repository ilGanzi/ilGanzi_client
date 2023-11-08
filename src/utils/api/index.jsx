import axios from "axios";
import { login, setAccessToken } from "../store/reducer/user";
import { useNavigate } from "react-router-dom";
import { apicall } from "../interceptor/axiosInterceptor";
import { useDispatch, useSelector } from "react-redux";

class UserApi {
    static async postLogin(email,pw){
        try{
            const loginData = {
                email: email,
                password: pw,
            };
            const response = await apicall.post(`/api/accounts/auth/`,loginData);
            const accessToken = response.data.token.access
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
            console.log("login success");
            return response.data
        } catch(error){
            console.error(error)
        }
    };

    static async postRegister(email,pw,phonenum) {
        try{
            const registerData = {
                email: email,
                password: pw,
                phonenum: phonenum,
            };
            const response = await apicall.get(`/api/accounts/register/`, registerData)
        } catch(error){
            console.error(error);
        }
    };

    static async deleteLogout(email,pw){
        try{
            const logoutData = {
                email: email,
                password: pw
            };
            const response = await apicall.delete(`/api/accounts/auth/`)
            const dispatch = useDispatch();
            dispatch(login({
                isAuthorized: false,
                refreshToken: "",
            }));
        } catch(error){
            console.error(error);
        }
    }

    static async postRefresh() {
        try{
            const authData = useSelector((state) => state.user)
            const refreshToken = userData.value.refreshToken        
 
            const tokenData = {
                refresh: refreshToken
            };
            const response = await axios.post(`/api/accounts/auth/refresh/`,tokenData);
            const accessToken = response.data.access;

            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

        } catch(error){
            console.error(error);
        }
    };


    static async getUser() {
        try{
            const response = await apicall.post(`/api/accounts/user/`);
            return response.data
        } catch(error){
            console.error(error);
        }
    };

    static async postWatering() {
        try{
            const response = await apicall.post(`/api/accounts/update/watering/`);
            return
        } catch(error){
            console.error(error);
        }
    };

    
}

export default UserApi;