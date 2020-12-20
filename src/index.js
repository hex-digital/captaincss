const plugin = require('tailwindcss/plugin');
const defaultConfig = require('./defaultConfig');
const addClusterComponent = require('./objects/cluster');
const addStackComponent = require('./objects/stack');
const addWrapperComponent = require('./objects/wrapper');

module.exports = plugin(function (params) {
  addClusterComponent(params);
  addStackComponent(params);
  addWrapperComponent(params);
}, defaultConfig);
