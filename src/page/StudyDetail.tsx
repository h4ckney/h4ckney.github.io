import React from 'react';
import NavHeader from "../component/Header/NavHeader";
import StudyDetailHeader from "../component/Header/StudyDetailHeader";

const StudyDetail = () => {
    return (
        <div>
            <NavHeader/>
            <div style={{width: '60%', margin: '0 20%'}}>
                <StudyDetailHeader/>
            </div>
        </div>
    );
};

export default StudyDetail;