import { useEffect, useState } from 'react';
import { useSetScreenSize } from '../../setScreenHeight';
import * as styles from './settingstyle'
import UserApi from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { setAuthHeader } from '../../utils/interceptor/axiosInterceptor';
import { useSelector } from 'react-redux';


export default function SettingPage(){
    useSetScreenSize();
    const [treeName, setTreeName] = useState("");
    const [regexError,setRegexError] = useState(false);
    const navigate = useNavigate();
    const userData = useSelector((state) => state.user)

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

    const onClickFinish = async(treeName) =>{
        try{
            const data = await UserApi.postTreename(treeName);
            alert('나무 이름이 설정되었습니다.');
            navigate('/onborn');
        } catch(error){
            alert('인터넷 연결을 확인 후 다시 시도해 주세요.')
            console.error(error);
        }
    }
    
    useEffect(()=> {
        setAuthHeader(userData.value.accessToken);
    },[])
    
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
                         }}
                        onClick={() => onClickFinish(treeName)}
                    >완료</styles.FinishButton>
        </styles.SettingContainer>
    );
}