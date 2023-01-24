import React from 'react';
import IconButton from './IconButton'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ShareIcon } from 'native-base';

export default {
  title: 'base-components/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

export const Basic: ComponentStory<typeof IconButton> = args => <IconButton {...args}/>;

Basic.args = {
  width: 12,
  variant: 'solid',
  rounded: 8,
  icon: <ShareIcon/>
}