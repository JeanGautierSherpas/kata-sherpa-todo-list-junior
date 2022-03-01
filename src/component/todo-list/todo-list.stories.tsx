import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TodoList from './todo-list';

export default {
    title: 'Example/App',
    component: TodoList,
}as ComponentMeta<typeof TodoList>;
  
const Template: ComponentStory<typeof TodoList> = (args) => <TodoList {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
};