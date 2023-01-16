import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HelloWorld from './HelloWorld'

export default {
  title: 'components/HelloWorld',
  component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>;

export const Basic: ComponentStory<typeof HelloWorld> = args => <HelloWorld/>;


