import 'react';
import { Pressable, Text } from 'react-native-web';
import styles from './styles.js';
import { jsx } from 'react/jsx-runtime';

var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var Button = function Button2(_a) {
  var children = _a.children, style = _a.style, props = __rest(_a, ["children", "style"]);
  return jsx(Pressable, Object.assign({}, props, { style: [styles.container, style], children: typeof children === "string" ? jsx(Text, { style: styles.text, children }) : children }));
};

export { Button as default };
//# sourceMappingURL=Button.js.map
