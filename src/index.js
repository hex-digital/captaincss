const plugin = require('tailwindcss/plugin');
const defaultConfig = require('./defaultConfig');

const addClusterComponent = require('./objects/cluster');
const addStackComponent = require('./objects/stack');
const addWrapperComponent = require('./objects/wrapper');

const addIntrinsicCenterUtility = require('./utilities/intrinsic-center');

module.exports = plugin(function (params) {
  addClusterComponent(params);
  addStackComponent(params);
  addWrapperComponent(params);

  addIntrinsicCenterUtility(params);
}, defaultConfig);
