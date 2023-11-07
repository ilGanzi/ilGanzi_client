import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./introStyle";
import { useSetScreenSize } from "../../setScreenHeight";
import MainSlider from "../../components/slider/slider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Intro () {
    const navigate = useNavigate();
    if (!localStorage.getItem('visited')) {
        // 최초 방문자라면 플래그 설정
        localStorage.setItem('visited', 'false');
      }
      const isVisited = localStorage.getItem('visited');
    useSetScreenSize();
    useEffect(() => {
        if (isVisited === 'true') {
            navigate('/login');
        }else{
            localStorage.setItem('visited', 'true');
        }
    }, []);

        return(
        <styles.Container>
           <MainSlider/>
        </styles.Container>
    );
};