import * as styles from "./termStyle";

const Terms = ({isTermsOpen,setIsTermsOpen}) => {
    const onClickClose = () => {
        setIsTermsOpen(false);
    }

    return(
         isTermsOpen ? (
        <styles.Container>
            <styles.TermsTitle>제3이용동의</styles.TermsTitle>
            <styles.TermsDetail>qwrwqrqwrrqwrwqrqwrrqwrwwqrqwrrqwrwqrqwrasfsafawqrqwrrqwrwqrqwrasfsafawqrqwrrqwrwqrqwrasfsafawqrqwrrqwrwqrqwrasfsafawqrqwrrqwrwqrqwrasfsafawqrqwrrqwrwqrqwrasfsafawqrqwrrqwrwqrqwrasfsafawqrqwrrqwrwqrqwrasfsafawqrqwrrqwrwqrqwrasfsafawqrqwrrqwrwqrqwrasfsafawqrqwrrqwrwqrqwrasfsafawqrqwrrqwrwqrqwrasfsafawqrqwrrqwrwqrqwrasfsafawqrqwrrqwrwqrqwrasfsafawqrqwrrqwrwqrqwrasfsafaqrqwrasfsafarqwrwqr</styles.TermsDetail>
            <styles.TermsCloseButton onClick={onClickClose}>닫기</styles.TermsCloseButton>
        </styles.Container>
        )
        : null
    );
};

export default Terms;