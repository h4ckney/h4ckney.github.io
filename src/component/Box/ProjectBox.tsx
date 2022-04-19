import React from 'react';
import Styled from "styled-components";

interface Props {
    /**
     * 프로젝트 이름
     */
    Title: string
    /**
     * 프로젝트 설명
     */
    Description: string
}

const ProjectBox: React.FunctionComponent<Props> = ({Title,Description}) => {
    return (
        <ProjectContainer>
            <h1>{Title}</h1>
            <ProjectDescription>
                {Description}
            </ProjectDescription>
        </ProjectContainer>
    );
};

const ProjectContainer = Styled.div`
    width: calc(100%-40px);
    height: 130px;
    background-color: white;
    border-radius: 6px;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    padding: 20px 0 0 40px;
`

const ProjectDescription = Styled.p`
    margin: 0;
    width: 95%;
    overflow: hidden; 
    text-overflow: ellipsis;
    white-space: nowrap;
`

export default ProjectBox;
