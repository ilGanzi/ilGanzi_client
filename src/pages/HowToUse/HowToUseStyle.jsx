// HowToUseStyle.js

import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  padding: 20px;
  background-color : #BBC89E
`;



export const Title = styled.h2`
  font-size: 24px;
  color: #015B35;
  margin-bottom: 73px;
  text-align : center;
`;

export const Number = styled.div`
  font-size: 20px;
  color: #333;
  margin-top: 30px;
  text-align : left;
  font-weight : blod
  `;

export const LineBreak = styled.br``; // 줄바꿈을 표시하기 위한 styled component

export const ContentSection = styled.div`
  margin-top: 10px;
`;

export const ConTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const EmphasizedText = styled.span`
  color: #015B35; /* '#015B35'로 수정 */
  font-weight: bold; /* 강조 효과를 주기 위해 폰트를 두껍게 설정 */
`;

export const Content = styled.p`
  width:100%
  font-size: 16px;
  color: #000000;
  text-align: left;
  margin-top: 5px;
`;

export const CloseButton = styled.button`
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
export const GreenText = styled.span`
  color: #00a86b; /* 초록색 */
`;

export const BlackText = styled.span`
  color: #333;
  white-space : pre-line
`;
