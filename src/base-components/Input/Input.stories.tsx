import React from 'react';
import Input from './Input'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from '../../constants'

export default {
  title: 'base-components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Basic: ComponentStory<typeof Input> = args => <Input {...args}/>;

Basic.args = {
  color: colors.brandPrimary
}
