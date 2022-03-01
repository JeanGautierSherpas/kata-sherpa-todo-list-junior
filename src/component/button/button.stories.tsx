import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './button';

export default {
    title: 'Example/Button2',
    component: Button,
}as ComponentMeta<typeof Button>;
  
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
    onClick: () => null,
    children: "My button",
};