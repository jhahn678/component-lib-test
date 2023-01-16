'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
var reactNative = require('react-native');
var styles = require('./styles.js');
var jsxRuntime = require('react/jsx-runtime');

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
  var children = _a.children, style = _a.style, labelStyle = _a.labelStyle, props = __rest(_a, ["children", "style", "labelStyle"]);
  return jsxRuntime.jsx(reactNative.Pressable, Object.assign({}, props, { style: [styles.default.container, style], children: typeof children === "string" ? jsxRuntime.jsx(reactNative.Text, { style: [styles.default.text, labelStyle], children }) : children }));
};

exports.default = Button;
//# sourceMappingURL=Button.js.map
