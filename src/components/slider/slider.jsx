import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./sliderStyle";
import Lottie from "lottie-react";
import clickImg from "../../assets/clickLottie.json"
import wateringImg from "../../assets/wateringLottie.json";
import growingImg from "../../assets/growingLottie.json";
import { Link } from "react-router-dom";

const MainSlider = () => {
    const settings = {
          dots: true,
          draggable: true,
          arrows: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        };

    return(
        <styles.StyledSlider {...settings}>
            <styles.IntroContainer>
                <styles.Detail>당신의 클릭만으로<br/>나무를 심을 수 있다면?</styles.Detail>
                <styles.LottieWrapper>
                <Lottie animationData={clickImg}/>
                </styles.LottieWrapper>
            </styles.IntroContainer>
            <styles.IntroContainer>
                <styles.Detail>하루 30초 클릭으로<br/>나무에 생명을 불어넣어주세요.</styles.Detail>
                <styles.LottieWrapper>
                <Lottie style={{width: '70%'}} animationData={wateringImg}/>
                </styles.LottieWrapper>
            </styles.IntroContainer>
            <styles.IntroContainer>
                <styles.Detail>세피로트가<br/>실제 나무를 심어드립니다.</styles.Detail>
                <styles.LottieWrapper style={{height: '20%'}}>
                <Lottie style = {{objectFit: "cover", height: '25rem'}} animationData={growingImg}/>
                </styles.LottieWrapper>
                <styles.LoginWrapper>
                    <styles.LoginLinkbox to = {`/login`}>시작하기</styles.LoginLinkbox>
                </styles.LoginWrapper>
            </styles.IntroContainer>
        </styles.StyledSlider>
    );
};

export default MainSlider;