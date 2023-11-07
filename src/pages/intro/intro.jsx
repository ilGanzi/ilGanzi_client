import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./introStyle";
import { useSetScreenSize } from "../../setScreenHeight";
import MainSlider from "../../components/slider/slider";
import { useNavigate } from "react-router-dom";

export default function Intro () {
    const isVisited = localStorage.getItem('visited');
    const navigate = useNavigate();

    useSetScreenSize();
    if(isVisited){
        navigate('/login');
    }
    else{
        return(
        <styles.Container>
           <MainSlider/>
        </styles.Container>
    );}
};