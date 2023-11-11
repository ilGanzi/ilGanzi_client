import * as styles from "./adStyle";
import productImage from '../../assets/product.png'
import UserApi from "../../utils/api";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { setAuthHeader } from "../../utils/interceptor/axiosInterceptor";

const Advertise = ({isAdOpen,setIsAdOpen}) => {
    const userData = useSelector((state) => state.user)
    const serverUrl = "https://ilganziback-lvwun.run.goorm.site";
    const [advertisement,setAdvertisement] = useState({
        adimage: "",
        adname: "",
        brandDetail: "",
        adurl: "",
    });
    const [imageUrl, setImageUrl] = useState("");
    const onClickClose = () => {
        setIsAdOpen(false);
    }

    const getAd = async () => {
        try{
            const adData = await UserApi.getAdvertise(); 
            setAdvertisement(adData);
            setImageUrl(`https://ilganziback-lvwun.run.goorm.site/${adData.adimage}`);
        } catch(error){
            alert('광고를 불러오는 중 오류가 발생했습니다.')
            setIsAdOpen(false);
            console.error(error);
        }
    }

    const onClickWatering = async() => {
        try{
            const response = await UserApi.postWatering();
            setIsAdOpen(false);
            window.open(advertisement.adurl);

        } catch(error){
            console.error(error);
        }
    }
    
    useEffect(()=> {
        getAd();    
        setAuthHeader(userData.value.accessToken);
    },[])

    return(
         isAdOpen ? (
        <styles.Container>
            <styles.AdImage src={imageUrl}/>
            <styles.Title>오늘의 지구 브랜드</styles.Title>
            <styles.Product>{advertisement.adname}</styles.Product>
            <styles.Detail>{advertisement.brandDetail}</styles.Detail>
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
                onClick={onClickWatering}
                >바로가기</styles.Button>
            </styles.ButtonWrapper>
        </styles.Container>
        )
        : null
    );
};

export default Advertise;