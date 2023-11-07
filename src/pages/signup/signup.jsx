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
  const [showPassword, setShowPassword] = useState(false); // 추가: 비밀번호 보이기 여부 상태

  const [nameTouched, setNameTouched] = useState(false);
  const [idTouched, setIdTouched] = useState(false);
  const [ipwTouched, setIpwTouched] = useState(false);
  const [cpwTouched, setCpwTouched] = useState(false);
  const isFormValid = !nameError && !IDError && !IPWError && !CPWError && !regexError && !passwordError &&
    (nameTouched || idTouched || ipwTouched || cpwTouched) &&
    Name && ID && IPW && CPW;

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNameChange = (e) => {
    // ...
  };

  const handleEmailIDChange = (e) => {
    // ...
  };

  const handlePasswordInput = (e) => {
    // ...
  };

  const handlePasswordCheck = (e) => {
    // ...
  };

  const handleFinishButtonClick = () => {
    // ...
  };

  return (
    <styles.SettingContainer>
      <styles.SettingWrapper>
        <styles.Signup_Title>회원가입</styles.Signup_Title>
        <styles.Signup_mention>회원가입 확인 및 가입을 진행합니다.</styles.Signup_mention>
        <styles.NameInputSection>
          {/* ... */}
        </styles.NameInputSection>
        <styles.emailID_InputSection>
          {/* ... */}
        </styles.emailID_InputSection>
        <styles.PassWord_InputSection>
          <styles.PassWord_Input
            onChange={handlePasswordInput}
            type={showPassword ? 'text' : 'password'} // 비밀번호 보이기 여부에 따라 type 설정
            placeholder='비밀번호 입력'
            style={{
              backgroundColor: 'white',
              border: (IPWError && ipwTouched) ? '3px solid red' : (ipwTouched ? '1px solid black' : '1px solid gray'),
            }}
          />
          {/* 추가: 비밀번호 보이기/숨기기 버튼 */}
          <span onClick={handleTogglePasswordVisibility} style={{ cursor: 'pointer' }}>
            {showPassword ? '숨기기' : '보이기'}
          </span>
          {ipwTouched && (IPW.length < 8 || !(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(IPW))) && (
            <div style={{ color: 'red' }}>
              {IPW.length < 8 ? '비밀번호는 8자 이상이어야 합니다.' : '비밀번호가 문자, 숫자, 기호를 조합해보세요.'}
            </div>
          )}
        </styles.PassWord_InputSection>
        {/* ... */}
      </styles.SettingWrapper>
    </styles.SettingContainer>
  );
}

