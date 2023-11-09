import * as styles from "./findPWStyle";
import UserApi from "../../utils/api"; // 15번줄부터 28번줄에 의해 비활성화 상태인데  저거 주석 풀면 다시 활성화될거에요.
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../utils/store/reducer/user"; //변경하신다면 FindPW로 정정
import { useNavigate } from "react-router-dom";
import { useSetScreenSize } from "../../setScreenHeight";

export default function Login(){
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    useSetScreenSize();

    const onClickFindPw = async (email) => { //이 부분 API 기능에 맞게 수정 부탁드리겠습니다.
       const loginEmail = `${email}@naver.com`
        try{
        const loginData = await UserApi.postFindPw(loginEmail);
    } catch(error){
        console.error(error)
    }}
    


    return(
        <styles.Container>
            <styles.ServiceInfo>
                <styles.findPWTitle>비밀번호 찾기</styles.findPWTitle>
                <styles.SubTitle>작성하신 이메일로 전송됩니다.</styles.SubTitle>
            </styles.ServiceInfo>
            <styles.LoginInfo>
                <styles.Classify>이메일</styles.Classify>
                <styles.InputWrapper>
                    <styles.EmailInput onChange={(e) => setEmail(e.target.value)}/>
                    <styles.NaverMail>@naver.com</styles.NaverMail>
                </styles.InputWrapper>
                <styles.FindIDNotice>메일이 오지 않을 경우, 스팸함을 확인해주세요.</styles.FindIDNotice>
                <styles.FindIDButton onClick={() => onClickFindPw(email)}>비밀번호 찾기</styles.FindIDButton>
            </styles.LoginInfo>

        </styles.Container>
    );
};