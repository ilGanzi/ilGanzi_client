import styled from "styled-components";

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
    justify-content: center;
    gap: 5px;
    `
export const PlantInf = styled.div`
    width: 45%;
    background-color: lightgrey;
    font-size: 20px;
    font-weight: 700;
    padding: 20px;
    border-radius: 16px;
    text-align: center;
`