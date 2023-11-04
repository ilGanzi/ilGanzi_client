import * as styles from "./adStyle";
import productImage from '../../assets/product.png'

const Advertise = ({isAdOpen,setIsAdOpen}) => {
    const onClickClose = () => {
        setIsAdOpen(false);
    }

    return(
         isAdOpen ? (
        <styles.Container>
            <styles.AdImage src={productImage}/>
            <styles.Title>오늘의 지구 브랜드</styles.Title>
            <styles.Product>[한살림]포도잼(280g)</styles.Product>
            <styles.Detail>‘한살림'은 1990년부터 병재사용운동을 시작해 현재 잼류, 젓갈류 등 64개 품목에 재사용병을 적용하고 있습니다.</styles.Detail>
            <styles.ButtonWrapper>
                <styles.Button 
                style={{
                    border: '1px solid #009456',
                    color: '#009456',
                    backgroundColor: 'transparent'}}
                onClick = {onClickClose}
                >닫기</styles.Button>
                <styles.Button
                style={{
                    backgroundColor: '#009456',
                    color: "white"
                }}
                >바로가기</styles.Button>
            </styles.ButtonWrapper>
        </styles.Container>
        )
        : null
    );
};

export default Advertise;