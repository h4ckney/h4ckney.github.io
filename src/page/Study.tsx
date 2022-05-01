import React from 'react';
import StudyBox from "../component/Box/StudyBox";
import HeaderNav from "../component/Header/HeaderNav";
import Recoil from "../asset/img/Recoil.png"
import Storybook from "../asset/img/Storybook.png"


const Study = () => {
    return (
        <div style={{width: '60%', margin: '0 20%'}}>
            <HeaderNav/>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <StudyBox Img={Recoil} Title={'Recoil'} Description={'Recoil의 사용법과 다른 상태 관리 라이브러의 차이점'} Tag={['상태 관리 라이브러리', "Recoil"]}/>
                <StudyBox Img={Storybook} Title={'Storybook'} Description={'Storybook 사용법과 직접 해보며 장점 및 단점'} Tag={['개발 환경', '컴포넌트 관리']}/>
                <StudyBox  Title={'스코프와 클로저'} Description={'프론트엔드의 공부'} Tag={['TDZ']}/>
                <StudyBox Title={'실행 컨텍스트'} Description={'프론트엔드의 공부'}/>
            </div>
        </div>
    );
};

export default Study;
