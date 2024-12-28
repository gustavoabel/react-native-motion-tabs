module.exports = {
  presets: ['module:react-native-builder-bob/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx'],
        alias: {
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@config': './src/config',
        },
      },
    ],
  ],
};
