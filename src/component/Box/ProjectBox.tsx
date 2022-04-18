import React from 'react';

interface Props {
    Title: string
}

const ProjectBox: React.FunctionComponent<Props> = ({Title}) => {
    return (
        <div style={{backgroundColor: 'red', width: '70%', height: '150px'}}>
            {Title}
        </div>
    );
};

export default ProjectBox;
