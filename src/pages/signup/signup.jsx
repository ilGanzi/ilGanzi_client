// import { useState } from 'react';
// import { useSetScreenSize } from '../../setScreenHeight';
// import * as styles from './signupStyle'


// export default function SettingPage(){
//     useSetScreenSize();
//     const [treeName, setTreeName] = useState("");
//     const [regexError,setRegexError] = useState(false);

//     const onChangeName = (e) => {
//         //값이 숫자인지 검사하는 정규식
//       const regex = /^[a-zA-Z0-9가-힣]{2,6}$/
//       if (regex.test(e.target.value)) {
//         setTreeName(e.target.value);
//         setRegexError(false);
//       }
//       else{
//         setRegexError(true);
//       }
//     };

//     const emailID = (e) => {
//         // 값이 숫자와 영어로만 구성되는 정규식
//         const regex = /^[a-zA-Z0-9]{5,20}$/;
//         if (regex.test(e.target.value)) {
//           setTreeName(e.target.value);
//           setRegexError(false);
//         } else {
//           setRegexError(true);
//         }
//       };

//       const Password_input = (e) => {
//         // 값이 숫자와 영어로만 구성되는 정규식
//         const regex = /^[a-zA-Z0-9]{8,16}$/;
//         if (regex.test(e.target.value)) {
//           setTreeName(e.target.value);
//           setRegexError(false);
//         } else {
//           setRegexError(true);
//         }
//       };

//       const Password_check = (e) => {
//         // 값이 숫자와 영어로만 구성되는 정규식
//         const regex = /^[a-zA-Z0-9]{8,16}$/;
//         if (regex.test(e.target.value)) {
//           setTreeName(e.target.value);
//           setRegexError(false);
//         } else {
//           setRegexError(true);
//         }
//       };



//     return(
//         <styles.SettingContainer>
//             <styles.SettingWrapper>
//                 <styles.Signup_Title>회원가입</styles.Signup_Title>
//                 <styles.Signup_mention>회원가입 확인 및 가입을 진행합니다.</styles.Signup_mention>
//                 <styles.NameInputSection>
//                     <styles.NameInput 
//                         onChange={onChangeName} 
//                         placeholder='이름 입력'
//                         style={{
//                             backgroundColor : 'white',
//                             border: regexError ? '3px solid red' : '1px solid black'
//                     }}/>
//                     {/* <styles.NameInputInformName
//                         style={{
//                             color: regexError ? 'red' : '#999999'
//                         }}
//                     >나무 이름은 2~6자의 영문, 숫자, 한글만 사용 가능해요.</styles.NameInputInformName>
//                     <styles.NameInputInform>한번 정한 나무 이름은 변경할 수 없어요.</styles.NameInputInform> */}
//                 </styles.NameInputSection>
//                 <styles.emailID_InputSection>
//                     <styles.EmailID_Input
//                         onChange={emailID}
//                         placeholder='ID'
//                         style={{
//                             backgroundColor : 'white',
//                             border: regexError ? '3px solid red' : '1px solid black'
//                         }}/>
//                 </styles.emailID_InputSection>
//                 <styles.PassWord_InputSection>
//                     <styles.PassWord_Input
//                         onChange={Password_input}
//                         type='password'
//                         placeholder='비밀번호 입력'
//                         style={{
//                             backgroundColor : 'white',
//                             border: regexError ? '3px solid red' : '1px solid black'
//                         }}/>
//                 </styles.PassWord_InputSection>
//                 <styles.PassWord_CheckSection>
//                     <styles.PassWord_Check
//                         onChange={Password_check}
//                         type='password'
//                         placeholder='비밀번호 재입력'
//                         style={{
//                             backgroundColor : 'white',
//                             border: regexError ? '3px solid red' : '1px solid black'
//                         }}/>
//                 </styles.PassWord_CheckSection>
//             </styles.SettingWrapper>
//                     <styles.FinishButton
//                         style={{
//                             backgroundColor: regexError ? '#e9e9e9' : '#009456',
//                             color: regexError ? '#777777' : 'white'
//                     }}>확인</styles.FinishButton>
//         </styles.SettingContainer>
//     );
// }
import { useState } from 'react';
import * as styles from './signupStyle';

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
    const regex = /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (regex.test(e.target.value)) {
      setIPW(e.target.value);
      setIPWError(false);
    } else {
      setIPWError(true);
    }

    if (e.target.value !== CPW) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setIpwTouched(true);
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
      // Handle cases when some fields were not touched here.
      return;
    }

    if (!Name || !ID || !IPW || !CPW) {
      setRegexError(true);
    } else {
      setRegexError(false);
      // You can add the registration logic here.
    }
  };

  return (
    <styles.SettingContainer>
      <styles.SettingWrapper>
        <styles.Signup_Title>회원가입</styles.Signup_Title>
        <styles.Signup_mention>회원가입 확인 및 가입을 진행합니다.</styles.Signup_mention>
        <styles.NameInputSection>
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
            type='password'
            placeholder='비밀번호 입력'
            style={{
              backgroundColor: 'white',
              border: (IPWError && ipwTouched) ? '3px solid red' : (ipwTouched ? '1px solid black' : '1px solid gray'),
            }}
          />
          {ipwTouched && (IPW.length < 8 || !(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(IPW))) && (
            <div style={{ color: 'red' }}>
              {IPW.length < 8 ? '비밀번호는 8자 이상이어야 합니다.' : '비밀번호가 문자, 숫자, 기호를 조합해보세요.'}
            </div>
          )}
        </styles.PassWord_InputSection>

        <styles.PassWord_CheckSection>
          <styles.PassWord_Check
            onChange={handlePasswordCheck}
            type='password'
            placeholder='비밀번호 재입력'
            style={{
              backgroundColor: 'white',
              border: (CPWError && cpwTouched) ? '3px solid red' : (cpwTouched ? '1px solid black' : '1px solid gray'),
            }}
          />
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

