import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 0px 20px 16px 20px;
    overflow: hidden;
    box-sizing: border-box;
    height:calc(var(--vh, 1vh) * 100);
`


export const ServiceInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    box-sizing: border-box;
    padding: 30% 20px 10% 20px;
`

export const SettingPWTitle = styled.div`
    width: 100%;
    display : flex;
    flex-direction: column;
    align-items: left;
    padding : 0px 0px 10px 0px;
    font-weight: 700;
    font-size: 31px;
    line-height: 31px;
    color: #000000;
`

export const InputWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    font-size: 20px;
    border: none;
    border-bottom: 1px solid grey;
    padding: 5px 10px 5px 10px;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
    align-items: center;
    border-radius: 16px;
`
export const NewPwInput = styled.input`
    font-size: 20px;
    padding: 10px 5px 5px 5px;
    width: 90%;
    border: none;
`

export const SubTitle = styled.div`
    width: 100%;
    font-size: 16px;
    display: flex;
    justify-content: left;
    margin-bottom: 20px;
    `

export const PwSettingButton = styled.button`
    padding: 16px;
    margin-top: 40px;
    margin-bottom: 40px;
    width: 100%;
    font-size: 20px;
    box-sizing: border-box;
    color: white;
    background-color: #009456;
    text-align: center;
    font-weight: 700;
    border-radius: 16px;
    border: none;
`