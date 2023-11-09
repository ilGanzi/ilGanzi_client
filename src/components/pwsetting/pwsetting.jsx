import { useSetScreenSize } from "../../setScreenHeight";
import * as styles from './pwsettingStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";


const PwSetting = () => {
    const [showPw,setShowPw] = useState(false);
    const [newPw, setNewPw] = useState("");
    const [pwTouched,setPwTouched] = useState(false);
    const [regexError, setRegexError] = useState(false);
    useSetScreenSize();
    
    const onClickEye = () => {
        setShowPw(!showPw);
    }

    const onChangePw = (e) => {
        const password = e.target.value;
        const isPasswordValid = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

        setNewPw(password);
        setRegexError(!isPasswordValid);
        setPwTouched(true);
    };

  return (
    <styles.Container>
        <styles.ServiceInfo>
            <styles.SettingPWTitle>비밀번호 재설정</styles.SettingPWTitle>
            <styles.SubTitle>새로 설정할 비밀번호를 입력해주세요.</styles.SubTitle>
            <styles.InputWrapper style={{
            backgroundColor: 'white',
            border: regexError ? '3px solid red' : "",
          }}>
            <styles.NewPwInput type= {showPw ? "": "password"} onChange={(e) => onChangePw(e)}/>
            <FontAwesomeIcon icon={faEye} onClick={onClickEye}/>
            </styles.InputWrapper>
            {pwTouched && (newPw.length < 8 || !(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(newPw))) && (
            <div style={{ color: 'red' }}>
              {newPw.length < 8 ? '비밀번호는 8자 이상이어야 합니다.' : '비밀번호에 문자, 숫자, 기호를 조합해야 합니다.'}
            </div>
              )}
            <styles.PwSettingButton>재설정</styles.PwSettingButton>
        </styles.ServiceInfo>
    </styles.Container>
  );
};

export default PwSetting;