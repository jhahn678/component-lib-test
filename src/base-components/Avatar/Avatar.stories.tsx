import React from 'react';
import Avatar from './Avatar'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'base-components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      control: { type: 'select' }
    },
  }
} as ComponentMeta<typeof Avatar>;

export const Basic: ComponentStory<typeof Avatar> = args => <Avatar {...args}/>;

Basic.args = {
  source: require('assets/Volo-logo-color.png')
}
