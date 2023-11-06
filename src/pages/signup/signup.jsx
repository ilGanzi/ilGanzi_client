import { useState } from 'react';
import { useSetScreenSize } from '../../setScreenHeight';
import * as styles from './signupStyle'


export default function SettingPage(){
    useSetScreenSize();
    const [treeName, setTreeName] = useState("");
    const [regexError,setRegexError] = useState(false);

    const onChangeName = (e) => {
        //값이 숫자인지 검사하는 정규식
      const regex = /^[a-zA-Z0-9가-힣]{2,6}$/
      if (regex.test(e.target.value)) {
        setTreeName(e.target.value);
        setRegexError(false);
      }
      else{
        setRegexError(true);
      }
    };

    const emailID = (e) => {
        // 값이 숫자와 영어로만 구성되는 정규식
        const regex = /^[a-zA-Z0-9]{5,20}$/;
        if (regex.test(e.target.value)) {
          setTreeName(e.target.value);
          setRegexError(false);
        } else {
          setRegexError(true);
        }
      };

      const Password = (e) => {
        // 값이 숫자와 영어로만 구성되는 정규식
        const regex = /^[a-zA-Z0-9]{8,16}$/;
        if (regex.test(e.target.value)) {
          setTreeName(e.target.value);
          setRegexError(false);
        } else {
          setRegexError(true);
        }
      };
      
    

    return(
        <styles.SettingContainer>
            <styles.SettingWrapper>
                <styles.Signup_Title>회원가입</styles.Signup_Title>
                <styles.Signup_mention>회원가입 확인 및 가입을 진행합니다.</styles.Signup_mention>
                <styles.NameInputSection>
                    <styles.NameInput 
                        onChange={onChangeName} 
                        placeholder='이름 입력'
                        style={{
                            backgroundColor : 'white',
                            border: regexError ? '3px solid red' : '1px solid black'
                    }}/>
                    {/* <styles.NameInputInformName
                        style={{
                            color: regexError ? 'red' : '#999999'
                        }}
                    >나무 이름은 2~6자의 영문, 숫자, 한글만 사용 가능해요.</styles.NameInputInformName>
                    <styles.NameInputInform>한번 정한 나무 이름은 변경할 수 없어요.</styles.NameInputInform> */}
                </styles.NameInputSection>
                <styles.emailID_InputSection>
                    <styles.EmailID_Input
                        onChange={emailID}
                        placeholder='ID'
                        style={{
                            backgroundColor : 'white',
                            border: regexError ? '3px solid red' : '1px solid black'
                        }}/>
                </styles.emailID_InputSection>
                <styles.PassWord_InputSection>
                    <styles.PassWord_Input
                        onChange={Password}
                        type='password'
                        placeholder='비밀번호 입력'
                        style={{
                            backgroundColor : 'white',
                            border: regexError ? '3px solid red' : '1px solid black'
                        }}/>
                </styles.PassWord_InputSection>
                <styles.PassWord_CheckSection>
                    <styles.PassWord_Check
                        onChange={Password}
                        type='password'
                        placeholder='비밀번호 재입력'
                        style={{
                            backgroundColor : 'white',
                            border: regexError ? '3px solid red' : '1px solid black'
                        }}/>
                </styles.PassWord_CheckSection>
            </styles.SettingWrapper>
                    <styles.FinishButton
                        style={{
                            backgroundColor: regexError ? '#e9e9e9' : '#009456',
                            color: regexError ? '#777777' : 'white'
                    }}>확인</styles.FinishButton>
        </styles.SettingContainer>
    );
}