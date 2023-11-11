import * as styles from "./findIDStyle";
import UserApi from "../../utils/api"; // 15번줄부터 28번줄에 의해 비활성화 상태인데 저거 주석 풀면 다시 활성화될거에요.
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../utils/store/reducer/user"; //변경하신다면 FindID로 정정
import { useNavigate } from "react-router-dom";
import { useSetScreenSize } from "../../setScreenHeight";
import IdResult from "../../components/idresult/idresult";

export default function Login(){
    useSetScreenSize();
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const authtest = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [phoneNum,setPhoneNum] = useState("");
    const [mailAuth, setMailAuth] = useState(true);
    const [authNum, setAuthNum] = useState("");
    const [isResultOpen,setIsResultOpen] = useState(false);

    const onClickFindID = async (phoneNum) => { //이 부분 API 기능에 맞게 수정 부탁드리겠습니다.
        try{
        const findIdData = await UserApi.postFindId(phoneNum);
        setEmail(findIdData.email);
        setIsResultOpen(true);
    } catch(error){
        console.error(error)
        alert('인터넷 연결을 확인 후 다시 시도해 주세요.')
    }}
    


    return(
        <styles.Container>
            <styles.ServiceInfo>
                <styles.findIDTitle>아이디 찾기</styles.findIDTitle>
                <styles.SubTitle>가입했던 계정의 전화번호를 입력해주세요.</styles.SubTitle>
            </styles.ServiceInfo>
            <styles.LoginInfo>
                <styles.Classify>전화번호 ( - 를 제외하고 입력해주세요. )</styles.Classify>
                <styles.InputWrapper>
                    <styles.EmailInput onChange={(e) => setPhoneNum(e.target.value)}/>
                </styles.InputWrapper>
                <styles.FindIDButton onClick={() => onClickFindID(phoneNum)}>아이디 찾기</styles.FindIDButton>
            </styles.LoginInfo>
            {isResultOpen && <IdResult isResultOpen={isResultOpen} setIsResultOpen={setIsResultOpen} id={email}/>}
        </styles.Container>
    );
};