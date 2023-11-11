import { useSetScreenSize } from '../../setScreenHeight';
import * as styles from './mainStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from '../../assets/mainBackground.png'
import plant from '../../assets/plant.png'
import Sidebar from '../../components/sidebar/sidebar';
import { useState, useEffect } from 'react';
import Advertise from '../../components/advertise/advertise';
import oneMoreWatering from '../../assets/onemorewatering.png';
import { useNavigate } from "react-router-dom";
import LoadingScreen from '../../components/loading/loading';
import { useSelector } from "react-redux"
import UserApi from '../../utils/api';
import { setAuthHeader } from '../../utils/interceptor/axiosInterceptor';


export default function MainPage(){
    useSetScreenSize();
    const [isOpen,setIsOpen] = useState(false);
    const [watered, setWatered] = useState(0);
    const [isAdOpen,setIsAdOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const userData = useSelector((state) => state.user)
    const navigate = useNavigate();
    const serverUrl = 'https://ilganziback-lvwun.run.goorm.site/';
    const[info,setInfo] = useState({});

    const [treename, setTreename] = useState("");
    const [treephase,setTreePhase] = useState(0);
    const [treeimage, setTreeImage] = useState("");
    const [totalUser, setTotalUser] = useState("0")


    const toggleSlide = () => {
        setIsOpen(true);
    };

    const onClickWatering = () => {
        setIsAdOpen(true);
    };
    
    const userInfo = async () => {
        try{
            const infoData = await UserApi.getUser();
            setInfo(infoData);

            setWatered(infoData.user.watered);
            setTreename(infoData.user.treename);
            setTreePhase(infoData.user.treephase);
            setTreeImage(infoData.treeimage);
            setTotalUser(infoData.totalUser);
            console.log(infoData);
            setIsLoading(false);
        } catch(error){
            console.error(error);
        }
    };
    
    useEffect(() => {
        if (!userData.value.isAuthorized) {
            navigate('/login');
            console.log("err");
        }else{
            setAuthHeader(userData.value.accessToken);
            userInfo();
        }
    }, []);

    useEffect(() => {
        userInfo();
    }, [isAdOpen]);

        return(
        <styles.MainContainer style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
        }}>
            <styles.HeaderContainer>
                <styles.TreeInf>{treename}의 지구 LV.{treephase}</styles.TreeInf>
                <FontAwesomeIcon icon={faBars} onClick={toggleSlide}/>
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
            </styles.HeaderContainer>
            <styles.WateringInf>
                 💧물 주기 {watered}
            </styles.WateringInf>
            { watered === 0 ? (
                <styles.Watering onClick={onClickWatering}>오늘의 물주기</styles.Watering>
            ): watered === 1 ? (
            <styles.OneMoreWateringSection>
            <styles.OneMoreWatering src={oneMoreWatering}/>
            <styles.Watering
            onClick={onClickWatering}
            style={{paddingTop: '0px'}}
            >한번 더 물주기</styles.Watering>
            </styles.OneMoreWateringSection> ) :
            (
                <styles.Watering>오늘 줄 수 있는 물을 모두 주었어요.</styles.Watering>
            )
             }
            <styles.Plant style={{backgroundColor: 'transparent'}} src={`${serverUrl}${info.treeimage}`}/>
            <styles.Quotes>내일 지구가 멸망하더라도<br/>나는 오늘 한 그루의 사과나무를 심겠다.</styles.Quotes>
            <styles.Quotes>{totalUser}명이 함께 하고 있어요.</styles.Quotes>
            {isAdOpen && 
            <Advertise isAdOpen={isAdOpen} setIsAdOpen={setIsAdOpen} />
            } 
            {isLoading && <LoadingScreen/>} 
        </styles.MainContainer>
    );
}