const plugin = require('tailwindcss/plugin');
const defaultConfig = require('./defaultConfig');

const addClusterComponent = require('./objects/cluster');
const addFrameComponent = require('./objects/frame');
const addStackComponent = require('./objects/stack');
const addWrapperComponent = require('./objects/wrapper');

const addSkipLinkComponent = require('./objects/skip-link');

const addIntrinsicCenterUtility = require('./utilities/intrinsic-center');

module.exports = plugin(function (params) {
  addClusterComponent(params);
  addFrameComponent(params);
  addStackComponent(params);
  addWrapperComponent(params);

  addSkipLinkComponent(params);

  addIntrinsicCenterUtility(params);
}, defaultConfig);
