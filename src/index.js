const plugin = require('tailwindcss/plugin');
const defaultConfig = require('./defaultConfig');
const addStackComponent = require('./objects/stack');
const addWrapperComponent = require('./objects/wrapper');

module.exports = plugin(function (params) {
  addStackComponent(params);
  addWrapperComponent(params);
}, defaultConfig);
