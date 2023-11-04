import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: #f2eadb;
    position: fixed;
    top: 10%;
    z-index: 1000;
    height: 85%;
    border-radius: 16px;
`

export const AdImage = styled.img`
    width: 100%;
    height: 50%;
`

export const Title = styled.div`
    width: 100%;
    padding: 20px;
    font-weight: 700;
    font-size: 25px;
    border-bottom: 1px solid black;
    box-sizing: border-box;
`

export const Product = styled.div`
    width: 100%;
    padding: 10px 20px 20px 20px;
    font-size: 20px;
    font-weight: 700;
    `

export const Detail = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    font-size: 20px;
`

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 5px;
`
export const Button = styled.button`
    width: 50%;
    height: 50px;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 700;
    `