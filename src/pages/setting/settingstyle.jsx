import styled from "styled-components";

export const SettingContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    overflow: hidden;
    box-sizing: border-box;
    height:calc(var(--vh, 1vh) * 100);
`

export const SettingWrapper = styled.div`
    width: 100%;
    height: 50%;
    flex-direction: column;
`

export const SettingInform = styled.div`
    width: 100%;
    justify-content: flex-start;
    font-weight: 700;
    font-size: 25px;
    padding: 7px 16px 7px 20px;
    `

export const NameInputSection = styled.div`
    width: 100%;
    padding: 32px 20px 32px 20px;
    flex-direction: column;
    display: flex
    justify-content: space-between;
    `

export const NameInput = styled.input`
    width: 80%;
    padding: 16px 20px 16px 20px;
    background-color: #f5f5f5;
    font-size: 20px;
    &::placeholder {
        color: #cccccc;
    }
    border: none;
    margin-bottom: 10px;
    border-radius: 16px;
    `

export const NameInputInformName = styled.div`
    width: 80%;
    color: #999999;
    font-size: 14px;
    padding: 0px 20px 0px 20px;
    `

export const NameInputInform = styled.div`
    width: 80%;
    color: #999999;
    font-size: 14px;
    padding: 0px 20px 0px 20px;
    margin-top:5px;
    `

export const FinishButton = styled.button`
    width: 90%;
    background-color: #e9e9e9;
    color: #777777;
    display: flex;
    justify-content: center;
    border: none;
    padding: 16px 20px 16px 20px;
    border-radius: 16px;
    font-size: 16px;
    `