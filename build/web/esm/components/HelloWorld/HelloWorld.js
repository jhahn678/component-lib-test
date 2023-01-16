import 'react';
import View from 'react-native-web/dist/exports/View';
import Text from 'react-native-web/dist/exports/Text';
import styles from './styles.js';
import { jsx } from 'react/jsx-runtime';

var HelloWorld = function HelloWorld2() {
  return jsx(View, { style: styles.container, children: jsx(Text, { style: styles.text, children: "Hello World" }) });
};

export { HelloWorld as default };
//# sourceMappingURL=HelloWorld.js.map
