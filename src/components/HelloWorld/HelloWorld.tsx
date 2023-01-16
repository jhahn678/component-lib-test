import React from 'react'
import { View, Text } from "react-native";
import styles from './styles'

const HelloWorld = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
    </View>
  )
}

export default HelloWorld;