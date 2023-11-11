// HowToUse.jsx

import React from "react";
import * as styles from "./HowToUseStyle";
import { useNavigate } from "react-router-dom"; //모달로 한다면 빼야할 코드


export default function HowToUse() {
    
    const navigate = useNavigate(); //모달로 한다면 빼야할 코드

    const onClickMain = () => {
        navigate('/');
    } //모달로 한다면 빼야할 코드 + page에 HowToUse components에 이동시켜야함

    return (
        <styles.Container>
            <styles.Title>이용 방법</styles.Title>
            <styles.Number>01.</styles.Number>
            <styles.ContentSection>
                <styles.ConTitle>
                    <styles.EmphasizedText>나만의 나무</styles.EmphasizedText>를 생성해주세요.
                </styles.ConTitle>
                <styles.Content>
                    <styles.BlackText>나만의 나무에 원하는 이름을 지어줄 수 있습니다.</styles.BlackText>
                    <styles.LineBreak />
                    <styles.BlackText>애정을 담아 이름을 지어주세요.</styles.BlackText>
                </styles.Content>
            </styles.ContentSection>

            <styles.Number>02.</styles.Number>
            <styles.ContentSection>
                <styles.ConTitle>
                    <styles.EmphasizedText>꾸준한 관심</styles.EmphasizedText>과 <styles.EmphasizedText>물</styles.EmphasizedText>을 주세요.
                </styles.ConTitle>
                <styles.Content>
                    <styles.BlackText>무럭무럭 자랄 동안 기다리면 물 줄 시간! 
                    <styles.LineBreak />
                    물주기 버튼을 클릭해서 나만의 나무에 물을 주세요</styles.BlackText>
                </styles.Content>
            </styles.ContentSection>

            <styles.Number>03.</styles.Number>
            <styles.ContentSection>
                <styles.ConTitle>
                    나무를 성장시켜 <styles.EmphasizedText>실제 나무</styles.EmphasizedText>를 심어주세요.
                </styles.ConTitle>
                <styles.Content>
                    <styles.BlackText>총 5단계까지 나무를 키우면 
                    <styles.LineBreak />원하는 곳을 선택하여 실제 나무를 심을 수 있어요.</styles.BlackText>
                </styles.Content>
            </styles.ContentSection>

            <styles.Number>04.</styles.Number>
            <styles.ContentSection>
                <styles.ConTitle>
                    실제 심어진 <styles.EmphasizedText>나의 나무</styles.EmphasizedText>를 확인해보세요
                </styles.ConTitle>
                <styles.Content>
                    <styles.BlackText>한 달에 한 번, 업데이트 되는 
                    <styles.LineBreak />나의 나무 정보를 게시판에서 확인해보세요.</styles.BlackText>
                </styles.Content>
            </styles.ContentSection>

            {/* ... 나머지 내용도 유사하게 추가 ... */}

            <styles.CloseButton onClick={onClickMain}>닫 기</styles.CloseButton> {/*모달로 해야한다면 onClick제거*/}
        </styles.Container>
    );
}
