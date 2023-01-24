import React from 'react';
import Skeleton from './Skeleton'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'base-components/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

export const Basic: ComponentStory<typeof Skeleton> = args => <Skeleton {...args}/>;

Basic.args = {
  height: 100,
  width: 100,
}