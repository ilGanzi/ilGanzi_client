import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: #f2eadb;
    align-items: center;
    position: fixed;
    top: 10%;
    z-index: 1000;
    height: 80%;
    border-radius: 16px;
`

export const TermsTitle = styled.div`
    width: 100%;
    padding:20px;
    font-size: 20px;
    font-weight: 700;
    box-sizing: border-box;
    `

export const TermsDetail = styled.div`
    width: 90%;
    height: 60%;
    padding: 20px;
    font-size: 15px;
    font-weight: 700;
    box-sizing: border-box;
    background-color: white;
    margin-bottom: 50px;
    overflow: auto;
    white-space: pre-wrap;
`


export const TermsCloseButton = styled.button`
    width: 90%;
    padding: 20px;
    background-color: #009456;
    font-size: 20px;
    font-weight: 700;
    color: white;
`
