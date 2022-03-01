import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Todo from './todo';

export default {
    title: 'Example/Todo',
    component: Todo,
}as ComponentMeta<typeof Todo>;
  
const Template: ComponentStory<typeof Todo> = (args) => <Todo {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
    todo: "Truc a faire",
    isCompleted: false,
    onClick: () => console.log("click"),
};