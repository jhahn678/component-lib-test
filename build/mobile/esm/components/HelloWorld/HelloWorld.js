import 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';
import { jsx } from 'react/jsx-runtime';

var HelloWorld = function HelloWorld2() {
  return jsx(View, { style: styles.container, children: jsx(Text, { style: styles.text, children: "Hello World" }) });
};

export { HelloWorld as default };
//# sourceMappingURL=HelloWorld.js.map
