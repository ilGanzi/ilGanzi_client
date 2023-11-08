import * as styles from "./findIDStyle";
import UserApi from "../../utils/api"; // 15번줄부터 28번줄에 의해 비활성화 상태인데 저거 주석 풀면 다시 활성화될거에요.
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../utils/store/reducer/user"; //변경하신다면 FindID로 정정
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const authtest = useSelector((state) => state.user)
    const navigate = useNavigate();

    const onClickFindID = async (email) => { //이 부분 API 기능에 맞게 수정 부탁드리겠습니다.
       /*const FindID= `${email}@naver.com`
        try{
        const loginData = await UserApi.postLogin(loginEmail,pw);
        dispatch(login({
            isAuthorized: true,
            email: loginData.user.email,
            password: loginData.user.password,
            accessToken: loginData.token.access,
        }));
        console.log('damn')
        console.log(authtest);
        navigate('/')
    } catch(error){
        console.error(error)
    }*/}
    


    return(
        <styles.Container>
            <styles.ServiceInfo>
                <styles.findIDTitle>아이디 찾기</styles.findIDTitle>
                <styles.SubTitle>작성하신 이메일로 전송됩니다.</styles.SubTitle>
            </styles.ServiceInfo>
            <styles.LoginInfo>
                <styles.Classify>이메일</styles.Classify>
                <styles.InputWrapper>
                    <styles.EmailInput onChange={(e) => setEmail(e.target.value)}/>
                    <styles.NaverMail>@naver.com</styles.NaverMail>
                </styles.InputWrapper>
                <styles.FindIDNotice>메일이 오지 않을 경우, 스팸함을 확인해주세요.</styles.FindIDNotice>
                <styles.FindIDButton onClick={() => onClickFindID(email)}>아이디찾기</styles.FindIDButton>
            </styles.LoginInfo>

        </styles.Container>
    );
};