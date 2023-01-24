import React from 'react';
import Switch from './Switch'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'base-components/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Basic: ComponentStory<typeof Switch> = args => <Switch {...args}/>;