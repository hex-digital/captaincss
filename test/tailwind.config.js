const Captaincss = require('../.');

module.exports = {
  prefix: 'u-',
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
};
