import * as styles from './style'

export default function Root() {
  return (
    <styles.Container>
        <styles.MainSection>
          <styles.TitlePic></styles.TitlePic>
          <styles.Title>세피로트</styles.Title>
          <styles.SubTitle>부제 들어갈 곳</styles.SubTitle>
          <styles.SignupButton>회원가입하고 나만의 나무 기르기</styles.SignupButton>
        </styles.MainSection>
    </styles.Container>
  );
}