import React from 'react';
import StudyBox from "../component/Box/StudyBox";
import NavHeader from "../component/Header/NavHeader";
import Recoil from "../asset/img/Recoil.png"
import Storybook from "../asset/img/Storybook.png"


const Study = () => {
    return (
        <div>
            <NavHeader/>
            <div style={{width: '60%', margin: '0 20%', marginTop: '30px'}}>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    <StudyBox Title={'Github Page를 통한 React 배포'} Description={''} Tag={['배포','Github.io']}/>
                    <StudyBox Img={Recoil} Title={'Recoil'} Description={'Recoil의 사용법과 다른 상태 관리 라이브러의 차이점'} Tag={['상태 관리 라이브러리', "Recoil"]}/>
                    <StudyBox Img={Storybook} Title={'Storybook'} Description={'Storybook 사용법과 직접 해보며 장점 및 단점'} Tag={['개발 환경', '컴포넌트 관리']}/>
                    <StudyBox Title={'스코프와 클로저'} Description={'프론트엔드 공부'} Tag={['TDZ', '스코프', '클로저']}/>
                    <StudyBox Title={'실행 컨텍스트'} Description={'프론트엔드 공부'} Tag={['실행 컨텍스트']}/>
                    <StudyBox Title={'브라우저 랜더링 과정'} Description={'프론트엔드 공부'} Tag={['브라우저 랜더링','렌더러 프로세스']}/>
                    <StudyBox Title={'좋은 테스트와 테스트 방식들'} Description={'프론트엔드 공부'} Tag={['E2E', 'TDD', '시각적 회귀 테스트']}/>
                    <StudyBox Title={'프로그래밍의 좋은 책과 기술 영상들'} Description={'책 과 토스, 카카오 영상들'}/>
                </div>
            </div>
        </div>
    );
};

export default Study;
