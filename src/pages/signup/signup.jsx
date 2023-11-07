import { useState } from 'react';
import * as styles from './signupStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from "@fortawesome/free-regular-svg-icons";

export default function SettingPage() {
  const [Name, setName] = useState("");
  const [ID, setID] = useState("");
  const [IPW, setIPW] = useState("");
  const [CPW, setCPW] = useState("");
  const [nameError, setNameError] = useState(false);
  const [IDError, setIDError] = useState(false);
  const [IPWError, setIPWError] = useState(false);
  const [CPWError, setCPWError] = useState(false);
  const [regexError, setRegexError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [nameTouched, setNameTouched] = useState(false);
  const [idTouched, setIdTouched] = useState(false);
  const [ipwTouched, setIpwTouched] = useState(false);
  const [cpwTouched, setCpwTouched] = useState(false);

  const [showIPW, setShowIPW] = useState(false);

  const handleShowIPW = () => {
    setShowIPW(!showIPW);
  };

  const [showCPW, setShowCPW] = useState(false);

  const handleShowCPW = () => {
    setShowCPW(!showCPW);
  };

  const isFormValid = !nameError && !IDError && !IPWError && !CPWError && !regexError && !passwordError &&
    (nameTouched || idTouched || ipwTouched || cpwTouched) &&
    Name && ID && IPW && CPW;
  const handleNameChange = (e) => {
    const regex = /^[a-zA-Z가-힣\s]{2,}$/;
    if (regex.test(e.target.value)) {
      setName(e.target.value);
      setNameError(false);
    } else {
      setNameError(true);
    }
    setNameTouched(true);
  };

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
  };

  const handleFinishButtonClick = () => {
    if (!nameTouched || !idTouched || !ipwTouched || !cpwTouched) {
      return;
    }

    if (!Name || !ID || !IPW || !CPW) {
      setRegexError(true);
    } else {
      setRegexError(false);
    }
  };

  return (
    <styles.SettingContainer>
      <styles.SettingWrapper>
        <styles.Signup_Title>회원가입</styles.Signup_Title>
        <styles.Signup_mention>회원가입 확인 및 가입을 진행합니다.</styles.Signup_mention>
        <styles.NameInputSection>
          <styles.field_mention>귀하의 성함을 입력해주세요.</styles.field_mention>
          <styles.NameInput
            onChange={handleNameChange}
            placeholder='이름 입력'
            style={{
              backgroundColor: 'white',
              border: (nameError && nameTouched) ? '3px solid red' : (nameTouched ? '1px solid black' : '1px solid gray'),
            }}
          />
        </styles.NameInputSection>
        <styles.emailID_InputSection>
        <styles.field_mention>아이디는 네이버 아이디와 같은 아이디로 입력해주세요.</styles.field_mention>

          <styles.EmailID_Input
            onChange={handleEmailIDChange}
            placeholder='ID'
            style={{
              backgroundColor: 'white',
              border: (IDError && idTouched) ? '3px solid red' : (idTouched ? '1px solid black' : '1px solid gray'),
            }}
          />

          {IDError && (
            <div style={{ color: '#EA383F', fontFamily: "Pretendard", fontSize: '12.5px', fontWeight: 'bold', lineHeight: '22px', letterSpacing: '-0.14px' }}>
              5~20자의 영문 소문자, 숫자와 특수기호(_),(-)를 사용할 수 있습니다.
            </div>
          )}
        </styles.emailID_InputSection>
        <styles.PassWord_InputSection>
          <styles.PassWord_Input
            onChange={handlePasswordInput}
            type={showIPW ? "text" : "password"}
            placeholder='비밀번호 입력'
            style={{
              backgroundColor: 'white',
              border: (IPWError && ipwTouched) ? '3px solid red' : (ipwTouched ? '1px solid black' : '1px solid gray'),
            }}
          />
          <FontAwesomeIcon icon={faEye} onClick={handleShowIPW} />
          {ipwTouched && (IPW.length < 8 || !(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(IPW))) && (
            <div style={{ color: 'red' }}>
              {IPW.length < 8 ? '비밀번호는 8자 이상이어야 합니다.' : '비밀번호가 문자, 숫자, 기호를 조합해보세요.'}
            </div>

          )}
        </styles.PassWord_InputSection>

        <styles.PassWord_CheckSection>
          <styles.PassWord_Check
            onChange={handlePasswordCheck}
            type={showCPW ? "text" : "password"}
            placeholder='비밀번호 재입력'
            style={{
              backgroundColor: 'white',
              border: (CPWError && cpwTouched) ? '3px solid red' : (cpwTouched ? '1px solid black' : '1px solid gray'),
            }}
          />
          <FontAwesomeIcon icon={faEye} onClick={handleShowCPW} /> 
          {passwordError && CPW !== "" && (
            <div style={{ color: 'red' }}>
              비밀번호가 일치하지 않습니다.
            </div>
          )}
        </styles.PassWord_CheckSection>
        {regexError && (
          <div style={{ color: 'red', marginTop: '10px' }}>
            모든 필드를 채워주세요.
          </div>
        )}
        <styles.FinishButton
          onClick={handleFinishButtonClick}
          style={{
            marginLeft: '20px',
            backgroundColor: regexError || passwordError || !isFormValid ? '#e9e9e9' : '#009456',
            color: regexError || passwordError || !isFormValid ? '#777777' : 'white',
            cursor: isFormValid ? 'pointer' : 'not-allowed',
          }}
        >
          확인
        </styles.FinishButton>
      </styles.SettingWrapper>
    </styles.SettingContainer>
  );
}

