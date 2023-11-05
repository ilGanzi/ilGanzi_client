import { useSetScreenSize } from "../../setScreenHeight";
import * as styles from './onbornStyle';
import Lottie from "lottie-react";
import hand from "../../assets/handLottie.json";
import levelImg from "../../assets/level1.png";

export default function OnBorn() {
    useSetScreenSize();

    return (
        <styles.Container>
            <styles.LottieWrapper>
            <Lottie animationData={hand} />
            </styles.LottieWrapper>
            <styles.InfWrapper>
                <styles.LevelImg src={levelImg}/>
                <styles.PlantInf>🎉 새싹이의 탄생 🎉</styles.PlantInf>
                <styles.GotoMain>물 주러 가기</styles.GotoMain>
            </styles.InfWrapper>
        </styles.Container>
    );
};