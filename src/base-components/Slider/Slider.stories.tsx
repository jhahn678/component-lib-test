import React from 'react';
import Slider from './Slider'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'base-components/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

export const Basic: ComponentStory<typeof Slider> = () => {
  return (
    <Slider defaultValue={70} minValue={0} maxValue={100} accessibilityLabel="hello world" step={1}>
      <Slider.Track >
        <Slider.FilledTrack/>
      </Slider.Track>
      <Slider.Thumb />
    </Slider>
  )
}

