import { useSetScreenSize } from "../../setScreenHeight";
import * as styles from './onbornStyle';
import Lottie from "lottie-react";
import hand from "../../assets/handLottie.json";
import levelImg from "../../assets/level1.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingScreen from "../../components/loading/loading";
import UserApi from "../../utils/api";
import { setAuthHeader } from "../../utils/interceptor/axiosInterceptor";
import { useSelector } from "react-redux";

export default function OnBorn() {
    useSetScreenSize();
    const userData = useSelector((state) => state.user)
    const [name,setName] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    const userInfo = async () => {
        try{
            const infoData = await UserApi.getUser();
            setName(infoData.user.treename);
            setIsLoading(false);
        } catch(error){
            console.error(error);
        }
    };
    useEffect(() => {
        setAuthHeader(userData.value.accessToken);
        userInfo();
    },[])

    return (
        <styles.Container>
            <styles.LottieWrapper>
            <Lottie animationData={hand} />
            </styles.LottieWrapper>
            <styles.InfWrapper>
                <styles.LevelImg src={levelImg}/>
                <styles.PlantInf>🎉 {name}의 탄생 🎉</styles.PlantInf>
                <styles.GotoMain to = {`/`}>물 주러 가기</styles.GotoMain>
            </styles.InfWrapper>
            {isLoading && <LoadingScreen/>}
        </styles.Container>
    );
};