import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px 16px 20px;
    overflow: hidden;
    box-sizing: border-box;
    height:calc(var(--vh, 1vh) * 100);
`

export const ServiceInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30% 20px 30% 20px;
`

export const SubTitle = styled.div`
    width: 100%;
    font-size: 16px;
    text-align: center;
    display: flex;
    justify-content: center;
    `

export const LoginInfo = styled.div`
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`

export const Classify = styled.div`
    width: 100%;
    font-size: px;
    font-weight: 700;
    `

export const InputWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    font-size: 20px;
    border: none;
    border-bottom: 1px solid grey;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
`
export const EmailInput = styled.input`
    font-size: 20px;
    padding: 5px;
    width: 60%;
    border: none;
`

export const NaverMail = styled.div`
    display: flex;
`

export const PassWordInput = styled.input`
    padding: 5px;
    box-sizing: border-box;
    width: 100%;
    border: none;
    font-size: 20px;
`

export const LoginButton = styled.button`
    padding: 16px;
    margin-top: 40px;
    margin-bottom: 40px;
    width: 100%;
    font-size: 20px;
    box-sizing: border-box;
    color: white;
    background-color: #23e04d;
    text-align: center;
    font-weight: 700;
    border-radius: 16px;
    border: none;
`

export const LoginOption = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    `

export const ForgotId = styled(Link)`
    width: 30%;
    font-size: 13px;
    color: #808080;
    text-align: center;
    border-right: 1px solid #bdbdbd;
`
export const ForgotPw = styled(Link)`
    width: 30%;
    font-size: 13px;
    color: #808080;
    text-align: center;
    border-right: 1px solid #bdbdbd;
`
export const Signup = styled(Link)`
    width: 30%;
    font-size: 13px;
    color: #808080;
    text-align: center;
`