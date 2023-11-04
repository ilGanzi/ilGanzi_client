import { useState } from 'react';
import { useSetScreenSize } from '../../setScreenHeight';
import * as styles from './settingstyle'

export default function SettingPage(){
    useSetScreenSize();
    const [treeName, setTreeName] = useState("");
    const [regexError,setRegexError] = useState(false);

    const onChangeTreeName = (e) => {
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
    

    return(
        <styles.SettingContainer>
            <styles.SettingWrapper>
                <styles.SettingInform>나무의 이름을 지어주세요.</styles.SettingInform>
                <styles.NameInputSection>
                    <styles.NameInput 
                        onChange={onChangeTreeName} 
                        placeholder='나무 이름을 입력해주세요.'
                        style={{
                            border: regexError ? '3px solid red' : 'none'
                    }}/>
                    <styles.NameInputInformName
                        style={{
                            color: regexError ? 'red' : '#999999'
                        }}
                    >나무 이름은 2~6자의 영문, 숫자, 한글만 사용 가능해요.</styles.NameInputInformName>
                    <styles.NameInputInform>한번 정한 나무 이름은 변경할 수 없어요.</styles.NameInputInform>
                </styles.NameInputSection>
            </styles.SettingWrapper>
                    <styles.FinishButton
                        style={{
                            backgroundColor: regexError ? '#e9e9e9' : '#009456',
                            color: regexError ? '#777777' : 'white'
                    }}>완료</styles.FinishButton>
        </styles.SettingContainer>
    );
}