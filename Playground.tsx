import React, { useState } from 'react'
import { Button, Checkbox, HStack, Input, VStack, Switch, Radio, Slider, Box, Select, TextArea, Image } from 'native-base'
import { ViewProps, StyleSheet, View, Text } from 'react-native'
import { colors, fonts, ThemeProvider } from './src'

interface Props {
    onLayout: ViewProps['onLayout']
}

const Playground = ({ onLayout }: Props) => {

  const [switchValue, setSwitchValue] = useState(false)
  const [city, setCity] = useState('')

  return (
    <ThemeProvider>
      <View style={styles.container} onLayout={onLayout}>
          <Text style={styles.text}>Component Playground</Text>
          <VStack space={5} width="300">
            <HStack justifyContent={'space-evenly'}>
              <Checkbox value='Checkbox'/>
              <Switch onValueChange={x => setSwitchValue(x)} value={switchValue} />
              <Radio.Group name="exampleGroup" defaultValue="1" accessibilityLabel="pick a size">
                <HStack space={3}>
                  <Radio value="1" colorScheme="blue" size="sm" my={1}>
                    Radio
                  </Radio>
                  <Radio value="2" colorScheme="yellow" size="sm" my={1}>
                    Radio
                  </Radio>
                </HStack>
              </Radio.Group>
            </HStack>
            <Input/>
            <Button>Native Base Button</Button>
            <Slider defaultValue={70} minValue={0} maxValue={100} accessibilityLabel="hello world" step={1}>
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
            <Box>
              <Select
                selectedValue={city}
                accessibilityLabel="Choose City"
                placeholder="Choose City"
                onValueChange={x => setCity(x)}
              >
                <Select.Item label="Boston" value="ux" />
                <Select.Item label="Washington, D.C." value="web" />
                <Select.Item label="New York" value="cross" />
                <Select.Item label="San Francisco" value="ui" />
                <Select.Item label="Denver" value="backend" />
              </Select>
            </Box>
            <TextArea placeholder="Volo is awesome" h={200} autoCompleteType={undefined} />
            <Image source={require('assets/vp_logo.png')}/>
          </VStack>
      </View>
    </ThemeProvider>
  )
}

export default Playground

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    text: {
      marginVertical: 50,
      fontSize: 24,
      color: colors.brandPrimary,
      fontFamily: fonts.VoloSans.bold
    },
});