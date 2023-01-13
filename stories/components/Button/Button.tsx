import React from 'react'
import { Text, Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import styles from "./styles";

interface Props extends PressableProps {
    style?: StyleProp<ViewStyle>
    children: React.ReactNode
}

const Button = ({ children, style, ...props }: Props) => {
    return (
        <Pressable {...props} style={[styles.container, style]}>
        {
            typeof children === 'string' 
            ? <Text style={styles.text}>{children}</Text> 
            : children
        }
        </Pressable>
    );
}

export default Button;