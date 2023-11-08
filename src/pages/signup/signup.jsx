import { useState } from 'react';
import * as styles from './signupStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from "@fortawesome/free-regular-svg-icons";
import UserApi from '../../utils/api';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../utils/store/reducer/user';


export default function SettingPage() {
  const [Name, setName] = useState("");
  const [ID, setID] = useState("");
  const [IPW, setIPW] = useState("");
  const [CPW, setCPW] = useState("");
  const [IDError, setIDError] = useState(false);
  const [IPWError, setIPWError] = useState(false);
  const [CPWError, setCPWError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [nameTouched, setNameTouched] = useState(false);
  const [idTouched, setIdTouched] = useState(false);
  const [ipwTouched, setIpwTouched] = useState(false);
  const [cpwTouched, setCpwTouched] = useState(false);

  const [showIPW, setShowIPW] = useState(false);

  const navigate = useNavigate();

  const handleShowIPW = () => {
    setShowIPW(!showIPW);
  };

  const [showCPW, setShowCPW] = useState(false);

  const handleShowCPW = () => {
    setShowCPW(!showCPW);
  };

  const isFormValid = !IDError && !IPWError && !CPWError && !passwordError &&
    (nameTouched || idTouched || ipwTouched || cpwTouched) &&
    Name && ID && IPW && CPW;
  
    const handleNameChange = (e) => {
      setName(e.target.value);
  }

  const handleEmailIDChange = (e) => {
    const regex = /^[a-zA-Z0-9_\-]{5,20}$/;
    if (regex.test(e.target.value)) {
      setID(e.target.value);
      setIDError(false);
    } else {
      setIDError(true);
    }
    setIdTouched(true);
  };

  const handlePasswordInput = (e) => {
    const password = e.target.value;
    const isPasswordValid =
      password.length >= 8 &&
      /[a-zA-Z]/.test(password) &&
      /\d/.test(password) &&
      /[@$!%*?&]/.test(password);

    setIPW(password);
    setIPWError(!isPasswordValid);
    setIpwTouched(true);

    if (password === CPW) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };


  const handlePasswordCheck = (e) => {
    setCPW(e.target.value);
    setPasswordError(e.target.value !== IPW);
    if (e.target.value === IPW) {
      setCPWError(false);
    } else {
      setCPWError(true);
    }
    setCpwTouched(true);
    console.log(CPW);
  };

  const dispatch = useDispatch();
  const onSubmitSignup = async (email,pw, phoneNum) => {
    const loginEmail = `${email}@naver.com`
    try{
    const register = await UserApi.postRegister(loginEmail,pw,phoneNum);
    dispatch(login({
        isAuthorized: true,
    }));
    alert("회원가입이 완료되었습니다.")
    console.log(register.data);
    navigate('/settings')
} catch(error){
    console.error(error)
}}

  return (
    <styles.SettingContainer>
      <styles.SettingWrapper>
        <styles.Signup_Title>회원가입</styles.Signup_Title>
        <styles.Signup_mention>회원가입 확인 및 가입을 진행합니다.</styles.Signup_mention>
        <styles.NameInputSection>
          <styles.field_mention>전화번호(-를 포함하지 않습니다)</styles.field_mention>
          <styles.NameInput
            onChange={handleNameChange}
            placeholder='전화번호'
          />
        </styles.NameInputSection>
        <styles.emailID_InputSection>
        <styles.field_mention>아이디(네이버 메일주소만 가능해요)</styles.field_mention>
          <styles.EmailInputWrapper>
          <styles.EmailID_Input
            onChange={handleEmailIDChange}
            placeholder='이메일'
          />
          <styles.NavermailAd>@ naver.com</styles.NavermailAd>
          </styles.EmailInputWrapper>
          {IDError && (
            <div style={{ color: '#EA383F', fontFamily: "Pretendard", fontSize: '12.5px', fontWeight: 'bold', lineHeight: '22px', letterSpacing: '-0.14px' }}>
              5~20자의 영문 소문자, 숫자와 특수기호를 사용할 수 있습니다.
            </div>
          )}
        </styles.emailID_InputSection>
        <styles.PassWord_InputSection>
          <styles.field_mention>비밀번호</styles.field_mention>
          <styles.PasswordInputWrapper
          style={{
            backgroundColor: 'white',
            border: (IPWError && ipwTouched) ? '3px solid red' : (ipwTouched ? '1px solid black' : '1px solid gray'),
          }}>
          <styles.PassWord_Input
            onChange={handlePasswordInput}
            type={showIPW ? "text" : "password"}
            placeholder='비밀번호 입력'
          />
          <FontAwesomeIcon icon={faEye} onClick={handleShowIPW} 
          style={{fontSize: '20px'}}/>
          </styles.PasswordInputWrapper>
          {ipwTouched && (IPW.length < 8 || !(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(IPW))) && (
            <div style={{ color: 'red' }}>
              {IPW.length < 8 ? '비밀번호는 8자 이상이어야 합니다.' : '비밀번호에 문자, 숫자, 기호를 조합해야 합니다.'}
            </div>
              )}
          </styles.PassWord_InputSection>

        <styles.PassWord_CheckSection>
          <styles.field_mention>비밀번호 확인</styles.field_mention>
        <styles.PasswordInputWrapper
          style={{
            backgroundColor: 'white',
            border: (IPWError && ipwTouched) ? '3px solid red' : (ipwTouched ? '1px solid black' : '1px solid gray'),
          }}>
          <styles.PassWord_Check
            onChange={handlePasswordCheck}
            type={showCPW ? "text" : "password"}
            placeholder='비밀번호 재입력'
            style={{
              backgroundColor: 'white',}}
          />
          <FontAwesomeIcon icon={faEye}    onClick={handleShowCPW}
          style={{fontSize: '20px'}} 
            /> 
            </styles.PasswordInputWrapper>
          {passwordError && CPW !== "" && (
            <div style={{ color: 'red' }}>
              비밀번호가 일치하지 않습니다.
            </div>
          )}
        </styles.PassWord_CheckSection>
        <styles.ButtonWrapper>
        <styles.FinishButton
          onClick={onSubmitSignup(ID,IPW,Name)}
          style={{
            marginLeft: '20px',
            backgroundColor: passwordError || !isFormValid ? '#e9e9e9' : '#009456',
            color: passwordError || !isFormValid ? '#777777' : 'white',
            cursor: isFormValid ? 'pointer' : 'not-allowed',
          }}
        >
          확인
        </styles.FinishButton>
        </styles.ButtonWrapper>
      </styles.SettingWrapper>
    </styles.SettingContainer>
  );
}

