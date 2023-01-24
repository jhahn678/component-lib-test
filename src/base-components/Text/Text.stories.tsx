import React from 'react';
import Text from './Text'
import { fonts } from '../../constants'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'base-components/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Basic: ComponentStory<typeof Text> = args => <Text {...args}/>;

Basic.args = {
  children: 'Volo is Awesome',
  fontFamily: fonts.VoloSansPro
}