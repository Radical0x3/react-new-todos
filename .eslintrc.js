module.exports = {
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    "no-var": "error",
    "indent": ["warn", 2],
    "linebreak-style": ["error", "windows"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],

    // override configuration set by extending "eslint:recommended"
    "no-empty": "warn",
    "no-cond-assign": ["error", "always"],

    // disable rules from base configurations
    "for-direction": "off",

    // react hooks rules
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  "parser": "@babel/eslint-parser",
  "env": {
    "browser": true,
    "es6": true
  },
};