import * as styles from "./findPWStyle";
import UserApi from "../../utils/api"; // 15번줄부터 28번줄에 의해 비활성화 상태인데  저거 주석 풀면 다시 활성화될거에요.
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../utils/store/reducer/user"; //변경하신다면 FindPW로 정정
import { useNavigate } from "react-router-dom";
import { useSetScreenSize } from "../../setScreenHeight";
import PwSetting from "../../components/pwsetting/pwsetting"

export default function Login(){
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    useSetScreenSize();
    const [mailAuth, setMailAuth] = useState(false);
    const [authNum, setAuthNum] = useState("");
    const [authCheckComponent, setAuthCheckComponent] = useState(false);

    const onClickFindPw = async (email) => { //이 부분 API 기능에 맞게 수정 부탁드리겠습니다.
       const loginEmail = `${email}@naver.com`
        try{
        const loginData = await UserApi.postFindPw(loginEmail);
    } catch(error){
        console.error(error)
    }}

    const sendAuth = async(email) => {
      try{
        const postAuth = await UserApi.postFindPw(email);
        setMailAuth(true);
        } catch(error){
            console.error(error);
            alert("인터넷 환경을 확인 후 다시 시도해 주세요.")
        }
    }

    const checkAuth = async(email,authNum) => {
        try{
            const data = await UserApi.postCheckAuth(email,authNum);
            setAuthCheckComponent(true);
        }catch(error) {
            alert('인증에 실패했습니다. 인증번호를 확인해주세요.')
            console.error(error);
        }
    }
    return (
        <>
          {authCheckComponent ? (
            <PwSetting/>
          ) : (
            <styles.Container>
              <styles.ServiceInfo>
                <styles.findPWTitle>비밀번호 찾기</styles.findPWTitle>
                <styles.SubTitle>작성하신 이메일로 인증번호가 전송됩니다.</styles.SubTitle>
              </styles.ServiceInfo>
              <styles.LoginInfo>
                <styles.Classify>이메일</styles.Classify>
                <styles.InputWrapper>
                  <styles.EmailInput onChange={(e) => setEmail(e.target.value)} />
                  <styles.NaverMail>@naver.com</styles.NaverMail>
                </styles.InputWrapper>
                <styles.AuthWrapper>
                  {!mailAuth && (
                    <styles.AuthButton onClick={() => sendAuth(email)}>인증하기</styles.AuthButton>
                  )}
                </styles.AuthWrapper>
                <styles.FindIDNotice>메일이 오지 않을 경우, 스팸함을 확인해주세요.</styles.FindIDNotice>
                {mailAuth && (
                  <>
                    <styles.Classify>인증번호</styles.Classify>
                    <styles.InputWrapper>
                      <styles.authNumInput onChange={(e) => setAuthNum(e.target.value)} />
                    </styles.InputWrapper>
                    <styles.AuthWrapper>
                      <styles.AuthCheckButton onClick={() => checkAuth(email,authNum)}>인증번호 확인</styles.AuthCheckButton>
                    </styles.AuthWrapper>
                  </>
                )}
              </styles.LoginInfo>
            </styles.Container>
          )}
        </>
      );
}     