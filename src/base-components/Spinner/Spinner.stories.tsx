import React from 'react';
import Spinner from './Spinner'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from '../../constants'

export default {
  title: 'base-components/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      options: ['sm', 'lg'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof Spinner>;

export const Basic: ComponentStory<typeof Spinner> = args => <Spinner {...args}/>;

Basic.args = {
  color: colors.brandPrimary,
  size: 'lg',
}