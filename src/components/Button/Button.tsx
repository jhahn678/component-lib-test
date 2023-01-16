import React from 'react'
import { Text, Pressable, PressableProps, StyleProp, ViewStyle, TextStyle } from "react-native";
import styles from "./styles";

interface Props extends PressableProps {
    style?: StyleProp<ViewStyle>
    labelStyle?: StyleProp<TextStyle>
}

const Button = ({ children, style, labelStyle, ...props }: Props) => {
    return (
        <Pressable {...props} style={[styles.container, style]}>
        {
            typeof children === 'string' 
            ? <Text style={[styles.text, labelStyle]}>{children}</Text> 
            : children
        }
        </Pressable>
    );
}

export default Button;