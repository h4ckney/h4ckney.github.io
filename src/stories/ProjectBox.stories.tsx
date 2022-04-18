import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProjectBox from '../component/Box/ProjectBox';

export default {
    title: 'component/Box/ProjectBox',
    component: ProjectBox,
} as ComponentMeta<typeof ProjectBox>;

const Template: ComponentStory<typeof ProjectBox> = (args) => <ProjectBox {...args} />;

export const Basic = Template.bind({});
