import React from 'react';
import Heading from './Heading'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors, fonts } from '../../constants'

export default {
  title: 'base-components/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

export const Basic: ComponentStory<typeof Heading> = args => <Heading {...args}/>;

Basic.args = {
  children: 'Volo is Awesome',
  color: colors.brandPrimary,
  fontFamily: fonts.VoloSansPro
}