import * as styles from "./loginStyle";
import UserApi from "../../utils/api";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../utils/store/reducer/user";
import { useNavigate } from "react-router-dom";
import { noAuthApi } from "../../utils/interceptor/axiosInterceptor";
import LoadingScreen from "../../components/loading/loading";
import logo from "../../assets/logo.png"

export default function Login(){
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [showPw,setShowPw] = useState(false);
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user)
    const navigate = useNavigate();
    const [isLoading,setIsLoading] = useState(false);
    const viewIntro = localStorage.getItem("visited");

    const onClickLogin = async (email,pw) => {
        setIsLoading(true)
        const loginEmail = `${email}@naver.com`
        try{
        const loginData = await UserApi.postLogin(loginEmail,pw);
        dispatch(login({
            isAuthorized: true,
            accessToken: loginData.token.access,
        }));
        localStorage.setItem("refToken",loginData.token.refresh)
        console.log('damn')
        setIsLoading(false)
        navigate('/')
    } catch(error){
        console.error(error)
        setIsLoading(false);
    }}
    

    const onClickEye = () => {
        setShowPw(!showPw);
    };

    useEffect(() => {
        if(!viewIntro){
            navigate('/intro')
        }else{
            if(userData.value.isAuthorized){
                navigate('/')
            }
        }
    },[])

    return(
        <styles.Container>
            <styles.ServiceInfo>
                <styles.LogoImage src={logo}/>
                <styles.SubTitle>하루 30초, 손 안의 나무를 현실로</styles.SubTitle>
            </styles.ServiceInfo>
            <styles.LoginInfo>
                <styles.Classify>이메일 주소</styles.Classify>
                <styles.InputWrapper>
                    <styles.EmailInput onChange={(e) => setEmail(e.target.value)}/>
                    <styles.NaverMail>@ naver.com</styles.NaverMail>
                </styles.InputWrapper>
                <styles.Classify>비밀번호</styles.Classify>
                <styles.InputWrapper>
                <styles.PassWordInput type= {showPw ? "": "password"} onChange={(e) => setPw(e.target.value)}/>
                <FontAwesomeIcon icon={faEye} onClick={onClickEye}/>
                </styles.InputWrapper>
                <styles.LoginButton onClick={() => onClickLogin(email,pw)}>LOGIN</styles.LoginButton>
            </styles.LoginInfo>
            <styles.LoginOption>
                <styles.ForgotId to={`/findID`}>아이디 찾기</styles.ForgotId>
                <styles.ForgotPw to={`/findPW`}>비밀번호 찾기</styles.ForgotPw>
                <styles.Signup to={`/signup`}>회원가입</styles.Signup>
            </styles.LoginOption>
            {isLoading && <LoadingScreen/>}
        </styles.Container>
    );
};