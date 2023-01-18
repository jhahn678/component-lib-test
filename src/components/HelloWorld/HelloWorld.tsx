import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { colors } from "../../constants";
import styles from './styles'

const HelloWorld = () => {

  const [toggled, setToggled] = useState(false);

  return (
    <Pressable onPress={() => setToggled(x => !x)}>
      <View style={[
        styles.container,
        { backgroundColor: toggled ? colors.brandSecondary : colors.brandPrimary,}
      ]}>
        <Text 
          style={[
            styles.text,
            { color: toggled ? colors.brandPrimary : colors.brandSecondary }
          ]}
        >
          Hello World
        </Text>
      </View>
    </Pressable>
    // <View></View>
  )
}

export default HelloWorld;