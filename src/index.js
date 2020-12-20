const plugin = require('tailwindcss/plugin');
const defaultConfig = require('./defaultConfig');
const stack = require('./objects/stack');

module.exports = plugin(function (params) {
  stack(params);
}, defaultConfig);
