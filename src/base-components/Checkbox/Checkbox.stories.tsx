import React from 'react';
import Checkbox from './Checkbox'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'base-components/Checkbox',
  component: Checkbox,
  argTypes: {
    isDisabled: {
      options: [true, false],
      control: { type: 'radio' }
    },
    isInvalid: {
      options: [true, false],
      control: { type: 'radio' }
    },
    isFocusVisible: {
      options: [true, false],
      control: { type: 'radio' }
    },
  },
} as ComponentMeta<typeof Checkbox>;

export const Basic: ComponentStory<typeof Checkbox> = args => <Checkbox {...args}/>;