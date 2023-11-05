import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 20px 16px 20px;
    overflow: hidden;
    box-sizing: border-box;
    height:calc(var(--vh, 1vh) * 100);
`

export const LottieWrapper = styled.div`
    width: 100%;
`

export const InfWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    align-items: center;
    `
export const LevelImg = styled.img`
    width: 20%;
    `
export const PlantInf = styled.div`
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    padding: 0px 20px 40px 20px;
    border-radius: 16px;
    text-align: center;
`

export const GotoMain = styled(Link)`
    width: 50%;
    padding: 15px;
    background-color: #009456;
    color: white;
    font-size: 20px;
    font-weight: 700;
    border-radius: 16px;
    text-decoration: none;
    text-align: center;
    `