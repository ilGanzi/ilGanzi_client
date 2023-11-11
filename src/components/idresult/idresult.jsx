import * as styles from "./idresultStyle";

const IdResult = ({isResultOpen,setIsResultOpen,id}) => {

    return(
         isResultOpen ? (
        <styles.Container>
            <styles.Title>조회 결과</styles.Title>
            <styles.Detail>회원님의 아이디는 {id}입니다.</styles.Detail>
            <styles.CloseButton to={'/login'}>로그인</styles.CloseButton>
        </styles.Container>
        )
        : null
    );
};

export default IdResult;