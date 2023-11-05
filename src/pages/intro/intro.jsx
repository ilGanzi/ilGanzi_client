import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "./introStyle";
import { useSetScreenSize } from "../../setScreenHeight";
import MainSlider from "../../components/slider/slider";

export default function Intro () {
    useSetScreenSize();
    return(
        <styles.Container>
           <MainSlider/>
        </styles.Container>
    );
};