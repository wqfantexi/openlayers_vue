module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent':['error', 4],
    'object-shorthand':['off'],
    'comma-dangle':['off'],
    'lines-between-class-members': ['off']
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
