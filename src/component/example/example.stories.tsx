import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Example from './example';

export default {
    title: 'Example/Example',
    component: Example,
}as ComponentMeta<typeof Example>;
  
const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />;

export const Defaults = Template.bind({});
Defaults.args = {
  texteLabel: "Mon Label",
  buttonLabel: "Mon button",
};