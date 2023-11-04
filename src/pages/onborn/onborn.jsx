import { useSetScreenSize } from "../../setScreenHeight";
import * as styles from './onbornStyle';
import Lottie from "lottie-react";
import forest from "../../assets/forestLottie.json";
import hand from "../../assets/handLottie.json";

export default function OnBorn() {
    useSetScreenSize();
    return (
        <styles.Container>
            <styles.LottieWrapper>
            <Lottie animationData={hand} />
            </styles.LottieWrapper>
            <styles.InfWrapper>
                <styles.PlantInf>새싹이</styles.PlantInf>
                <styles.PlantInf>Lv.1</styles.PlantInf>
            </styles.InfWrapper>
        </styles.Container>
    );
};