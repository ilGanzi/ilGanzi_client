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
    height: 80%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
`

export const Signup_Title = styled.div`
    width: 100%;
    justify-content: flex-start;
    font-weight: 700;
    font-size: 25px;
    padding: 7px 16px 7px 20px;
    `

export const EmailID_rule = styled.div`
    width: 100%;
    justify-content: flex-start;
    font-weight: 700;
    font-size: 25px;
    padding: 0px 5px 5px 0px;
    `

export const field_mention = styled.div`
    width: 100%;
    justify-content: flex-start;
    font-weight: 700;
    font-style : normal;
    font-size: 20px;
    line-height: normal;
    padding: 7px 14px 14px 7px;
    `

export const Signup_mention = styled.div`
    width: 100%;
    justify-content: flex-start;
    font-weight: 700;
    font-style : normal;
    font-size: 16px;
    line-height: normal;
    padding: 7px 16px 7px 20px;
    `

export const NameInputSection = styled.div`
    width: 100%;
    padding: 16px 20px 16px 20px;
    flex-direction: column;
    display: flex
    justify-content: space-between;
    `

export const emailID_InputSection = styled.div`
    width: 100%;
    padding: 0px 20px 16px 20px;
    flex-direction: column;
    display: flex
    justify-content: space-between;
    `

export const PassWord_InputSection = styled.div`
    width: 100%;
    padding: 0px 20px 16px 20px;
    flex-direction: column;
    box-sizing: boredr-box;
    display: flex
    justify-content: space-between;
    `
export const PasswordInputWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 16px;
    padding: 5px 20px 5px 20px;
    align-items: center;
`
export const EmailInputWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 16px;
    padding: 5px 20px 5px 20px;
    align-items: center;
`

export const PassWord_CheckSection = styled.div`
    width: 100%;
    padding: 0px 20px 30px 20px;
    flex-direction: column;
    display: flex
    justify-content: space-between;
    `


export const NameInput = styled.input`
    width: 80%;
    padding: 16px 20px 16px 20px;
    font-size: 20px;
    &::placeholder {
        color: #cccccc;
    }
    border: none;
    border-radius: 16px;
    border: 1px solid grey;
`

export const EmailID_Input = styled.input`
    width: 50%;
    padding: 10px 20px 10px 0px;
    background-wcolor: #f5f5f5;
    font-size: 20px;
    &::placeholder {
        color: #cccccc;
    };
    border: none;
    `

export const PassWord_Input = styled.input`
    width: 85%;
    padding: 10px 20px 10px 0px;
    background-wcolor: #f5f5f5;
    font-size: 20px;
    &::placeholder {
        color: #cccccc;
    };
    border: none;
    `
export const NavermailAd = styled.div`
    font-size: 20px;
    `
export const PassWord_Check = styled.input`
    width: 85%;
    padding: 10px 20px 10px 0px;
    background-wcolor: #f5f5f5;
    font-size: 20px;
    &::placeholder {
        color: #cccccc;
    };
    border: none;
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


export const ButtonWrapper = styled.div`
    width: 100%;
    padding-right: 25px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    `
export const FinishButton = styled.button`
    width: 100%;
    background-color: #e9e9e9;
    color: #777777;
    display: flex;
    justify-content: center;
    border: none;
    padding: 16px;
    border-radius: 16px;
    font-size: 16px;
    `

export const TermsOpen = styled.div`
    width: 100%;
    padding: 5px 20px 5px 20px;
    color: blue;
    `

export const TermsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0px 20px 10px 20px;
    `

export const TermsText = styled.div`
    font-size: 15px;
    font-weight: 700;
    padding-left: 10px;
    `