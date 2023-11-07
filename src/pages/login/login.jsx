import * as styles from "./loginStyle";
import UserApi from "../../utils/api";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from "@fortawesome/free-regular-svg-icons";
import useUserDataStore from "../../utils/store/store";

export default function Login(){
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [showPw,setShowPw] = useState(false);
    const {setLoginData} = useUserDataStore();

    const onClickLogin = (email,pw) => {
        const loginEmail = `${email}@naver.com`
        const loginData = UserApi.postLogin(loginEmail,pw);
        setLoginData(loginData);
    };

    const onClickEye = () => {
        setShowPw(!showPw);
    };

    return(
        <styles.Container>
            <styles.ServiceInfo>
                <div>로고</div>
                <styles.SubTitle>서비스 한 줄 설명</styles.SubTitle>
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
                <styles.ForgotId>아이디 찾기</styles.ForgotId>
                <styles.ForgotPw>비밀번호 찾기</styles.ForgotPw>
                <styles.Signup>회원가입</styles.Signup>
            </styles.LoginOption>
        </styles.Container>
    );
};