import React from 'react';
import { PressableProps, StyleProp, ViewStyle } from "react-native";
interface Props extends PressableProps {
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}
declare const Button: ({ children, style, ...props }: Props) => JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map