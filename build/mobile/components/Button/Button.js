import React from 'react';
import { Text, Pressable } from "react-native";
import styles from "./styles";
const Button = ({ children, style, ...props }) => {
    return (<Pressable {...props} style={[styles.container, style]}>
        {typeof children === 'string'
            ? <Text style={styles.text}>{children}</Text>
            : children}
        </Pressable>);
};
export default Button;
