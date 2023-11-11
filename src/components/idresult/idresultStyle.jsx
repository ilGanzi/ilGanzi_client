import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 90%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: #f2eadb;
    box-sizing: border-box;
    align-items: center;
    position: fixed;
    top: 10%;
    z-index: 1000;
    height: 40%;
    border-radius: 16px;
`

export const Title = styled.div`
    width: 100%;
    padding:20px;
    font-size: 20px;
    font-weight: 700;
    box-sizing: border-box;
    text-align: center;
    `

export const Detail = styled.div`
    width: 90%;
    padding: 10px;
    font-size: 20px;
    font-weight: 700;
    box-sizing: border-box;
    margin-bottom: 50px;
    margin-top: 20px;
    overflow: auto;
    white-space: pre-wrap;
`


export const CloseButton = styled(Link)`
    width: 90%;
    padding: 20px;
    background-color: #009456;
    font-size: 20px;
    font-weight: 700;
    color: white;
    text-align: center;
    text-decoration: none;
`
