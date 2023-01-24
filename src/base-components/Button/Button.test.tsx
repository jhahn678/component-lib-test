import React from 'react';
import Button from './Button'
import { NativeBaseProvider } from 'native-base';
import { fireEvent, render, screen } from '@testing-library/react-native';

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

// Can be removed once other examples are in place

describe('Button', () => {
  it('Handles Press', () => {
    const handlePress = jest.fn()
    render(
      <NativeBaseProvider initialWindowMetrics={inset}>
        <Button onPress={handlePress}>Hello World</Button>
      </NativeBaseProvider>
    );
    fireEvent.press(screen.getByText('Hello World'))
    expect(handlePress).toHaveBeenCalled();
  });
});
