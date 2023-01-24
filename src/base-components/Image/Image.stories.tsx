import React from 'react';
import Image from './Image'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'base-components/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

export const Basic: ComponentStory<typeof Image> = args => <Image {...args}/>;

Basic.args = {
  height: 200,
  width: 300,
  borderRadius: 'lg',
  source: { uri: require('../../assets/soccer_baltimore.png') }
}