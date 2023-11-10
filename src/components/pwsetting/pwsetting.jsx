import { useSetScreenSize } from "../../setScreenHeight";
import * as styles from './pwsettingStyle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import UserApi from "../../utils/api";
import { useNavigate } from "react-router-dom";


const PwSetting = () => {
    const [showPw,setShowPw] = useState(false);
    const [newPw, setNewPw] = useState("");
    const [pwTouched,setPwTouched] = useState(false);
    const [regexError, setRegexError] = useState(false);
    const navigate = useNavigate();
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

    const pwresetting = async (pw) => {
      try{
          const pwreset = await UserApi.postPwResetting(pw)
          alert('비밀번호 재설정이 완료되었습니다. 다시 로그인 해주세요.')
          navigate('/login')
      } catch(error){
          alert('인터넷 연결을 확인하고 다시 시도해 주세요.')
      }
    }

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
            <styles.PwSettingButton >재설정</styles.PwSettingButton>
        </styles.ServiceInfo>
    </styles.Container>
  );
};

export default PwSetting;