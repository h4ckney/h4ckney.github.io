import React from 'react';
import { useNavigate} from "react-router-dom";
import Styled from "styled-components";

const NavHeader = () => {
    const navigate = useNavigate()

    return (
        <header style={{ display: "flex", justifyContent: "center", marginBottom: '30px'}}>
            <table>
                <thead>
                    <LinkTab>
                        <th onClick={()=>navigate('/profile')}>profile</th>
                        <th onClick={()=>navigate('/project')}>project</th>
                        <th onClick={()=>navigate('/study')}>study</th>
                    </LinkTab>
                </thead>
            </table>
        </header>
    );
};

const LinkTab = Styled.tr`
    cursor: pointer;
`

export default NavHeader;
