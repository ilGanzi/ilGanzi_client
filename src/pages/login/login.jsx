import * as styles from "./loginStyle";

export default function Login(){
    return(
        <styles.Container>
            <styles.ServiceInfo>
                <div>로고</div>
                <styles.SubTitle>서비스 한 줄 설명</styles.SubTitle>
            </styles.ServiceInfo>
            <styles.LoginInfo>
                <styles.Classify>이메일 주소</styles.Classify>
                <styles.EmailInputWrapper>
                    <styles.EmailInput/>
                    <styles.NaverMail>@ naver.com</styles.NaverMail>
                </styles.EmailInputWrapper>
                <styles.Classify>비밀번호</styles.Classify>
                <styles.PassWordInput/>
                <styles.LoginButton>LOGIN</styles.LoginButton>
            </styles.LoginInfo>
            <styles.LoginOption>
                <styles.ForgotId>아이디 찾기</styles.ForgotId>
                <styles.ForgotPw>비밀번호 찾기</styles.ForgotPw>
                <styles.Signup>회원가입</styles.Signup>
            </styles.LoginOption>
        </styles.Container>
    );
};