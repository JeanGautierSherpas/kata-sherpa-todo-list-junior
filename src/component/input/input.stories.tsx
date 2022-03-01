import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './input';

export default {
    title: 'Example/Input',
    component: Input,
}as ComponentMeta<typeof Input>;
  
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
  texteInput: "Mon Input",
  buttonLabel: "Mon button",
};