import styled from "styled-components";
import Slider from "react-slick";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

export const StyledSlider = styled(Slider)`
  .slick-prev {
    z-index: 1;
    left: 30px;
  }

  .slick-next {
    right: 40px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    opacity: 0.5;
    color: white;
  }

  .slick-dots {
    display: flex;
    justify-content: center;
    bottom: 100px;
    color: white;
  }

  .slick-dots li button:before {
    font-size: 15px;
    color: white;
  }

  li.slick-active button:before {
    color: white;
  }
`;

export const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
`;

export const LottieWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 20%;
    `
export const Detail = styled.div`
  padding-top: 30%;
  width: 100%;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
`

export const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    font-size: 20px;
    font-weight: 700;
    box-sizing: border-box;
`

export const LoginLinkbox = styled(Link)`
    width: 100%;
    padding: 15px;
    background-color: #009456;
    box-sizing: border-box;
    border-radius: 16px;
    text-align: center;
    text-decoration: none;
    color: white;
    `

