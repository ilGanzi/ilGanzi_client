import React, {useEffect, useRef, useState } from "react";
import * as styles from "./sidebarStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook, faGift, faHouse, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import UserApi from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../utils/store/reducer/user";
import axios from "axios";

const Sidebar = ({isOpen,setIsOpen}) => {
  const outside = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=> {
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  })
  
  const toggleSide = () => {
    setIsOpen(false);
  }
  const handleOutside = (e) => {
    if(!outside.current.contains(e.target)){
      setIsOpen(false)
    }
  }

  const onClickLogout = () => {
        dispatch(logout({
          isAuthorized: false
        }));
        delete axios.defaults.headers.common['Authorization'];
        localStorage.setItem("refToken","");
        alert('로그아웃되었습니다.');
        navigate('/login');
      }

  return (
      <styles.Sidebar id="sidebar" ref={outside} className={isOpen ? 'open': ''}>
        <styles.SidebarHead>
        <styles.Button icon={faBars} onClick={toggleSide} onKeyDown={toggleSide}/>
        </styles.SidebarHead>
        <styles.Content>
          <styles.ContentIcon icon={faGift}/>
          <styles.ContentLink>서비스 소개</styles.ContentLink>
        </styles.Content>
        <styles.Content style={{paddingBottom: '50px', borderBottom: '1px solid lightgrey'}}>
          <styles.ContentIcon icon={faBook}/>
          <styles.ContentLink>이용 약관 및 정책</styles.ContentLink>
        </styles.Content>
        <styles.Content>
          <styles.ContentIcon icon={faRightFromBracket}/>
          <styles.ContentLink onClick={onClickLogout}>로그아웃</styles.ContentLink>
        </styles.Content>

      </styles.Sidebar>
  );
};

export default Sidebar;