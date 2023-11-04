import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 20px 16px 20px;
    overflow: hidden;
    box-sizing: border-box;
    height:calc(var(--vh, 1vh) * 100);
    `

export const HeaderContainer = styled.div`
    width: 100%;
    padding: 20px 20px 10px 20px;
    display: flex;
    justify-content: space-between;
    font-size: 26px;
    `
    
export const TreeInf = styled.div`
    font-weight: 700;
    font-size: 26px;
`

export const WateringInf = styled.div`
    width: 100%;
    font-size: 20px;
    display: flex;
    justify-content: flex-start;
    font-weight: 700;
    height: 10%;
    `
export const Watering = styled.div`
    font-size: 20px;
    font-weight: 700;
    text-decoration: underline;
    padding: 20px;
    `
export const Plant = styled.img`
    width: 50%;
    `

export const Quotes = styled.div`
    padding: 10px 20px 5px 20px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    `

