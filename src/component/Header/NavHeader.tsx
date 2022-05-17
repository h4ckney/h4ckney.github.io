import React from 'react';
import { useNavigate} from "react-router-dom";
import Styled from "styled-components";

//Todo
//로고 또는 블로그명 추가

const NavHeader = () => {
    const navigate = useNavigate()

    return (
        <HeaderTap>
                <LinkTab onClick={()=>navigate('/profile')}>Profile</LinkTab>
                <LinkTab onClick={()=>navigate('/project')}>Project</LinkTab>
                <LinkTab onClick={()=>navigate('/study')}>Study</LinkTab>
        </HeaderTap>
    );
};

const HeaderTap = Styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 100px 0 0;
    background-color: #92B4EC;
    height: 50px;
`

const LinkTab = Styled.p`
   color: white;
   cursor: pointer;   
   margin-right: 50px;
`

export default NavHeader;
