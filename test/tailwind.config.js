const Captaincss = require('../.');

module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.php',
      './src/**/*.js',
      './src/**/*.svg',
      './src/css/purge-whitelist.css',
    ],
  },
  plugins: [Captaincss],
  prefix: 'u-',
  captain: {
    support: {
      flexGap: false, // https://caniuse.com/flexbox-gap
    },
    prefix: {
      objects: 'o-',
      components: 'c-',
    },
    separator: {
      elements: '__',
      modifiers: '--',
    },
  },
};
