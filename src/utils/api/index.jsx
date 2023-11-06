import axios from "axios";

class UserApi {
    static async postLogin(email,pw){
        try{
            const loginData = {
                email: email,
                password: pw,
            };
            const response = await axios.get(`/api/accounts/auth/`,loginData);
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

    static async deleteLogout(){
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