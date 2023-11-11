import * as styles from "./termStyle";

const Terms = ({isTermsOpen,setIsTermsOpen}) => {
    const onClickClose = () => {
        setIsTermsOpen(false);
    }

    return(
         isTermsOpen ? (
        <styles.Container>
            <styles.ServiceTerm>📕 필수 서비스 약관 동의</styles.ServiceTerm>
            <styles.ServiceTermDetail>제 1조 (목적)<br/>본 약관은 주식회사 세피로트(이하 “회사"라 함)가 운영하는 서비스인 세피로트를 이용함에 있어 회사와 회원의 권리의무사항 기타 필요한 사항을 규정함을 그 목적으로 합니다.<br/><br/>제 2조 (정의)<br/>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br/>“서비스": 세피로트라는 이름으로 회사가 운영하는 콘텐츠 서비스를 말합니다. “앱": 스마트폰, 태블릿 등 모바일 정보통신설비를 이용하여 회사가 제공하는 서비스를 이용할 수 있는 애플리케이션을 말합니다. “이용자": 사이트에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다. “회원": “회사"와 이용계약을 체결하고 “이용자"아이디(ID)를 부여받은 “이용자"로서 “회사"의 정보를 지속적으로 제공 받으며 “회사”가 제공하는 “콘텐츠" 및 “제발 서비스"를 지속적으로 이용할 수 있는 자를 말합니다.</styles.ServiceTermDetail>
            <styles.PrivacyTerm>📒 개인정보 처리방침 동의</styles.PrivacyTerm>
            <styles.PrivacyTermDetail>제 1조 개인정보의 수집항목 및 수집방법<br/><br/>세피로트는 회원가입, 원활한 고객상담, 각종 서비스 등 기본적인 서비스 제공을 위해 아래와 같은 개인정보를 수집합니다.<br/><br/><br/>개인정보 수집 항목은 다음과 같습니다.<br/><br/>1)회원가입 시 <br/>수집 항목: [필수] 이메일, 이름, 비밀번호, 휴대폰 번호/ <br/>[선택] 뉴스레터 수신, 이벤크 및 혜택 정보 수신 <br/>이용목적: [필수] 이용자 식별, 공지사항 전달, 서비스 <br/>이용 및 상담 등 원활한 의사소통 경로 확보/ [선택] <br/>맞춤형 상품 추천 등 마케팅 활용 및 광고성 정보 전달<br/><br/><br/>2)구매 시 <br/>수집항목: [필수] 회원정보(이메일, 비밀번호, 이름, 휴대폰번호), 주문관련(카드번호, 유효기간, 비밀번호 앞 2자리, 생년월일 6자리) / [선택] 뉴스레터 수신, 이벤트 및 혜택 정보 수신 <br/> 이용목적: [필수] 이용자 식별, 공지사항 전달, 서비스 이용 및 상담 등 원활한 의사소통 경로 확보 / [선택] 맞춤형 상품 추천 등 마케팅 활용 및 광고성 정보 전달 </styles.PrivacyTermDetail>
            <styles.MarketingTerm>📘 마케팅 이용 동의</styles.MarketingTerm>
            <styles.MarketingTermDetail>회사가 애플리케이션을 통해 접근하는 스마트폰 기능은 다음과 같습니다.<br/><br/>*접근 항목: 알림 <br/>*접근 목적: 내가 설정한 알람 푸시 받기, <br/> 세피로트에서 보내는 소식 받기 <br/><br/><br/>개인정보 수집 항목은 다음과 같습니다.<br/><br/><br/>아이디(이메일), 비밀번호, 이름, 휴대폰 번호 회원가입이나 결제 이외에도 타임앤코가 회원에게 개인적인 정보를 요구할 수 있습니다.<br/><br/><br/>개인정보 수집 방법은 다음과 같습니다.<br/>홈페이지 회원가입, 서비스 이용, 이벤트 응모, 생성정보 수집 틀을 통한 수집, 회원정보 수정, 팩스, 전화, 고객센터 문의, 이벤트 응모, 배송요청, 협력회사로부터의 제공


</styles.MarketingTermDetail>
            <styles.TermsCloseButton onClick={onClickClose}>닫기</styles.TermsCloseButton>
        </styles.Container>
        )
        : null
    );
};

export default Terms;