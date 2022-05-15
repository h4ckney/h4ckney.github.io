import React from 'react';
import NavHeader from "../component/Header/NavHeader";
import profileImg from "../asset/img/윤정민.jpg"
import Styled from "styled-components"

const introduce : string[] = ['JavaScript와 TypeScript를 주로 사용하는 2년 차 프론트엔드 개발자이며, 설계부터 배포, 운영해 온 경험이 있습니다.',
    '개발 전 요구 사항을 정리하고 라이브러리를 찾으며 기간 내 더 좋은 서비스를 만들기 위해서 노력합니다.',
    '협업 소프트웨어를 실무에 도입해 일하는 것에 있어서 소통 및 효율성을 향상하는 것을 우선시하고 있습니다.']

const skill: {FrontEnd: string[], BackEnd: string[], CollaborationTool: string[]}  = {
    FrontEnd: ['JavaScript', 'TypeScript', 'React', 'React Native', 'Next'],
    BackEnd: ['Java', 'MySql', 'Telegraph', 'InfluxDB'],
    CollaborationTool: ['Slack', 'Jira', 'Trello', 'MS Teams']
}

const Profile = () => {
    return (
        <div style={{width: '50%', margin: '0 25%'}}>
            <NavHeader/>
            <MainProfile>
                <img src={profileImg} alt={'profile'}/>
                <div>
                    <h1>윤정민 | 많은 경험을 추구하는 개발자</h1>
                    <h2>Contact</h2>
                    <p>Email : jmyoon555@gmail.com</p>
                    <p>Github: https://github.com/h4ckney</p>

                </div>
            </MainProfile>
            <Stack>
                    <h1>Skill</h1>
                    <div style={{display: "flex"}}>
                        <p>Front-End:</p>
                        {skill.FrontEnd.map((v)=>
                            <p style={{marginLeft: '5px'}}>{v}</p>
                        )}
                    </div>
                    <div style={{display: "flex"}}>
                        <p>Back-End:</p>
                        {skill.BackEnd.map((v)=>
                            <p style={{marginLeft: '5px'}}>{v}</p>
                        )}
                    </div>
                    <div style={{display: "flex"}}>
                        <p>Collaboration-Tool:</p>
                        {skill.CollaborationTool.map((v)=>
                            <p style={{marginLeft: '5px'}}>{v}</p>
                        )}
                    </div>
            </Stack>
            <Introduce>
                <div>
                    <h1>Introduce</h1>
                    {introduce.map((v)=>
                        <p style={{width: '800px', lineHeight: 1.7}}>- {v}</p>
                    )}
                </div>
            </Introduce>
            <WorkExperience>

            </WorkExperience>
            <Education>
                <div>
                    <h1>Education</h1>
                    <p>최종학력: 한세사이버보안고등학교 (2017-03 ~ 2020-02)</p>
                </div>
                <div>
                    <h1>Certification</h1>
                    <p>정보처리 기능사 (2018-12)</p>
                    <p>정보기기운용 기능사 (2019-07)</p>
                </div>
            </Education>
        </div>
    );
};

const MainProfile = Styled.main`
    width: 100%; 
    display: flex;
    align-items: center;
    img {
        width: 150px;
        height: 200px;
        margin-right: 50px;
    }
`

const Stack = Styled.div`
    
`

const Introduce = Styled.div`
    width: 100%; 
    display: flex;
`

const WorkExperience = Styled.div`

`

const Education = Styled.div`
    display: flex;
    width: 85%;
    justify-content: space-between;
`


export default Profile;
