function babelConfig(api) {
  if (api) {
    api.cache(false);
  }

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react"
  ];

  const plugins = [
      "@babel/plugin-proposal-class-properties",
      [
        "module-resolver",
        {
          root: [
            "./src"
          ],
          alias: {
            "#components": "./src/components",
            "^#generic/([\\w_]+)": "./src/components/generic/\\1/\\1",
            "#lib": "./src/lib",
          },
          cwd: 'babelrc'
        }
      ]
    ]
  ;

  return {
    presets,
    plugins
  };
}

module.exports = babelConfig;