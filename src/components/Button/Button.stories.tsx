import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button'

export default {
  title: 'components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = args => <Button {...args}/>;

Basic.args = {
  style: { width: 200 },
  children: 'Hello World'
}


