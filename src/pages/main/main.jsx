import { useSetScreenSize } from '../../setScreenHeight';
import * as styles from './mainStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from '../../assets/mainBackground.png'
import plant from '../../assets/plant.png'

export default function MainPage(){
    useSetScreenSize();
    return(
        <styles.MainContainer style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
        }}>
            <styles.HeaderContainer>
                <styles.TreeInf>새싹이의 지구 LV.1</styles.TreeInf>
                <FontAwesomeIcon icon={faBars} style={{color: "#000000"}}/>
            </styles.HeaderContainer>
            <styles.WateringInf>💧 물(1/10)</styles.WateringInf>
            <styles.Watering>오늘의 물주기</styles.Watering>
            <styles.Plant src={plant}/>
            <styles.Quotes>내일 지구가 멸망하더라도<br/>나는 오늘 한 그루의 사과나무를 심겠다.</styles.Quotes>
            <styles.Quotes>109,282명이 함께 하고 있어요.</styles.Quotes>

        </styles.MainContainer>
    );
}