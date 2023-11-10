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
            const accessToken = response.data.token.access;
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            console.log("login success");
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
            const accessToken = response.data.token.access;
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            alert(axios.defaults.headers.common.Authorization);
            return accessToken;
        } catch(error){
            console.error(error);
            alert("인터넷 연결을 확인 후 다시 시도해 주세요.")
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
            alert(axios.defaults.headers.common.Authorization);
            throw error;
        }
    };

    static async deleteLogout(){
        try{
            const response = await apicall.delete(`/api/accounts/auth/`);
            delete axios.defaults.headers.common['Authorization'];

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
            const response = await apicall.post(`/api/accounts/update/watering/`);
            return
        } catch(error){
            console.error(error);
            throw error;
        }
    };

    static async postFindId() {
        try{
            const response = await apicall.post(`/api/accounts/update/findid/`);
            return
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
            const response = await apicall.post(`/accounts/findpw/`,emailData);
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
            }
            const response = await apicall.patch(`/accounts/user/`,authData);
            const tempaccessToken = response.data.access
            axios.defaults.headers.common['Authorization'] = `Bearer ${tempaccessToken}`
        } catch(error){
            console.error(error);
            throw error;
        }
    }

    static async postPwResetting(pw){
        try{
            const pwData = {
                password: pw
            }
            const response = await apicall.post(`/accounts/user/resetPw/`,pwData);
            delete axios.defaults.headers.common['Authorization'];
        } catch(error){
            console.error(error);
            throw error;
        }
    }
    
}

export default UserApi;