import React from 'react';
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div>
            <h1>저에 대해 알고 싶은 게 있으신가요?</h1>
            <div style={{display: "flex", flexDirection: 'column', width: '70px'}}>
                <Link to={'/profile'}>프로필</Link>
                <Link to={'/project'}>프로젝트</Link>
                <Link to={'/study'}>공부</Link>
            </div>
        </div>
    );
};

export default Main;