import React from 'react';
import { useNavigate} from "react-router-dom";
import Styled from "styled-components";

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
    margin-bottom: 30px;
    padding: 0 200px 0 0;
    background-color: blue;
    height: 50px;
`

const LinkTab = Styled.p`
   color: white;
   cursor: pointer;   
   margin-right: 30px;
`

export default NavHeader;
