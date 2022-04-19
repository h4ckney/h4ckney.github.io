import React from 'react';
import Styled from "styled-components";



interface Props {
    /**
     *  공부하는 것에 대한 이미지 또는 아이콘
     */
    Img: string,
    /**
     *  제목
     */
    Title: string,
    /**
     * 공부하는 것에 대한 간략한 내용
     */
    Description: string,
    /**
     * 공부와 관련된 태그
     */
    Tag?: string[]
}

/**
 * 박스 컴포넌트
 *
 * - 공부 관련 글 컴포넌트입니다
 */

const StudyBox:React.FunctionComponent<Props> = ({Img, Title, Description, Tag}) => {
    return (
        <StudyContainer>
            <img src={Img} alt={''} style={{width: '100%', height: '70%',borderRadius: '6px 6px 0 0'}}/>
            <StudyContent>
                <h4>{Title}</h4>
                <p>{Description}</p>
                <div style={{display: 'flex',marginLeft: '18px'}}>
                {Tag?.map((v)=>
                    <div style={{margin: '2px', borderRadius:'12px', border: '1px solid blue',padding: "2.5px"}}>
                        {v}
                    </div>
                )}
                </div>
            </StudyContent>
        </StudyContainer>
    );
};

const StudyContainer = Styled.div`
    width: 340px;
    height: 350px;
    border-radius: 6px;
    background-color: white;
    border: 1px solid #000;
    background-color: gray;
`

const StudyContent = Styled.div`
    h4{
        margin: 5px 20px 0 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    p:first-of-type{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
        margin: 5px 20px 0 20px;
    }
    
`

export default StudyBox;
