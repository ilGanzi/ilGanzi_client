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
            const accessToken = response.data.token.access
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        } catch(error){
            console.error(error);
        }
    };

    static async postTreename(){
        try{
            const response = await apicall.post(`/api/accounts/update/treename/`);
        } catch(error){
            console.error(error);
            alert('나무 이름 설정에 실패했습니다. 인터넷 연결을 확인하고 다시 시도해 주세요.')
        }
    };

    static async deleteLogout(){
        try{
            const response = await apicall.delete(`/api/accounts/auth/`);
            delete axios.defaults.headers.common['Authorization'];

        } catch(error){
            console.error(error);
        }
    }

    static async getUser() {
        try{
            const response = await apicall.get(`/api/accounts/user/`);
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

    static async postFindId() {
        try{
            const response = await apicall.post(`/api/accounts/update/findid/`);
            return
        } catch(error){
            console.error(error);
        }
    };

    static async postFindPw(){
        try{
            const response = await apicall.post(`/accounts/findpw`);
        } catch(error){
            console.error(error);
        }
    }

    
}

export default UserApi;