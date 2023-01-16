import { PressableProps, StyleProp, ViewStyle, TextStyle } from 'react-native-web';
interface Props extends PressableProps {
    style?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
}
declare const Button: ({ children, style, labelStyle, ...props }: Props) => JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map