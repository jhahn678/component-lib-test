import React from 'react';
import Button from './Button'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'base-components/Button',
  component: Button,
  argTypes: {
    colorScheme: {
      options: ['brandPrimary', 'brandSecondary', 'brandTertiary'],
      control: { type: 'select' },
    },
    isDisabled: {
      options: [true, false],
      control: { type: 'radio' }
    },
    isFocusVisible: {
      options: [true, false],
      control: { type: 'radio' }
    },
    isLoading: {
      options: [true, false],
      control: { type: 'radio' }
    },
    variant: {
      options: ['ghost', 'link', 'outline', 'solid', 'subtle', 'unstyled'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = args => <Button {...args}/>;

Basic.args = {
  children: 'Hello World',
  variant: 'solid',
  colorScheme: 'brandPrimary',
}


