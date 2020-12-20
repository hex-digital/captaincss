const plugin = require('tailwindcss/plugin');
const defaultConfig = require('./defaultConfig');
const addStackComponent = require('./objects/stack');

module.exports = plugin(function (params) {
  addStackComponent(params);
}, defaultConfig);
