import axios from "axios";
import { login, setAccessToken } from "../store/reducer/user";
import { useNavigate } from "react-router-dom";
import { apicall, setAuthHeader } from "../interceptor/axiosInterceptor";
import { useDispatch, useSelector } from "react-redux";
class UserApi {
    static async postLogin(email,pw){
        try{
            const loginData = {
                email: email,
                password: pw,
            };
            const response = await apicall.post(`/api/accounts/auth/`,loginData);
            return response.data
        } catch(error){
            console.error(error)
            alert('로그인에 실패했습니다. 인터넷 연결 환경이나 아이디와 비밀번호가 맞는지 확인해주세요.')
            throw error;
        
        }
    };

static async postRegister(email,pw,phonenum) {
        try{
            const registerData = {
                email: email,
                password: pw,
                phoneNumber: phonenum,
            };
            const response = await apicall.post(`/api/accounts/register/`, registerData);
            return response.data
        } catch(error){
            console.error(error);
            alert("인터넷 연결을 확인 후 다시 시도해 주세요.");
            throw error;
        }
    };
    
    static async postTreename(treename){
        try{
            const nameData = {
                treename: treename
            }
            const response = await apicall.patch(`/api/accounts/user/`,nameData);
        } catch(error){
            console.error(error);
            throw error;
        }
    };

    static async deleteLogout(){
        try{
            const response = await apicall.delete(`/api/accounts/auth/`);
            delete axios.defaults.headers.common['Authorization'];
            localStorage.setItem("refToken","");
        } catch(error){
            console.error(error);
            throw error;
        }
    }

    static async getUser() {
        try{
            const response = await apicall.get(`/api/accounts/user/`);
            return response.data;
        } catch(error){
            console.error(error);
            throw error;
        }
    };

    static async postWatering() {
        try{
            const response = await apicall.post(`/api/posts/watering/`);
            return response
        } catch(error){
            console.error(error);
            throw error;
        }
    };

    static async postFindId(phoneNum) {
        try{
            const numData = {
                phoneNumber: phoneNum
            };
            const response = await apicall.post(`/api/accounts/findid/`,numData);
            return response.data
        } catch(error){
            console.error(error);
            throw error;
        }
    };

    static async postFindPw(email){
        try{
            const loginEmail = `${email}@naver.com`;
            const emailData = {
                email: loginEmail
            };
            const response = await apicall.post(`/api/accounts/findpw/`,emailData);
        } catch(error){
            console.error(error);
            throw error;
        }
    }

    static async postCheckAuth(email,code){
        try{
            const loginEmail = `${email}@naver.com`
            const authData = {
                email: loginEmail,
                code: code,
            };
            const response = await apicall.patch(`/api/accounts/findpw/`,authData);
            return response.data
        } catch(error){
            console.error(error);
            throw error;
        }
    }

    static async postPwResetting(pw){
        try{
            const pwData = {
                password: pw
            };
            const response = await apicall.post(`/api/accounts/user/resetPw/`,pwData);
            delete axios.defaults.headers.common['Authorization'];
        } catch(error){
            console.error(error);
            throw error;
        }
    }
    
    static async getAdvertise(){
        try{
            const response = await apicall.get(`/api/advertises/advertise/`);
            return response.data;
        } catch(error){
            console.error(error);
            throw error;
        }
    }
}

export default UserApi;