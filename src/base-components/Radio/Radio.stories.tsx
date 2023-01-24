import React from 'react';
import Radio from './Radio'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'base-components/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

export const Basic: ComponentStory<typeof Radio.Group> = args => <Radio.Group {...args}/>;

Basic.args = {
  value: 'Boston',
  space: 2,
  children: (
    <>
      <Radio value="Boston">Boston</Radio>
      <Radio value="Washington, D.C.">Washington, D.C.</Radio>
      <Radio value="New York">New York</Radio>
      <Radio value="San Francisco">San Francisco</Radio>
      <Radio value="Denver">Denver</Radio>
    </>
  )
}