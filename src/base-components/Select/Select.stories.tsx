import React from 'react';
import Select from './Select'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'base-components/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const Basic: ComponentStory<typeof Select> = args => <Select {...args}/>;

Basic.args = {
  placeholder: 'Choose City',
  children: (
    <>
      <Select.Item label="Boston" value="ux" />
      <Select.Item label="Washington, D.C." value="web" />
      <Select.Item label="New York" value="cross" />
      <Select.Item label="San Francisco" value="ui" />
      <Select.Item label="Denver" value="backend" />
    </>
  )
}
