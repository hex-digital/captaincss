const plugin = require('tailwindcss/plugin');
const defaultConfig = require('../stubs/defaultConfig.stub');

const createPrefixer = require('./util/createPrefixer');

const addClusterComponent = require('./objects/cluster');
const addFrameComponent = require('./objects/frame');
const addStackComponent = require('./objects/stack');
const addWrapperComponent = require('./objects/wrapper');

const addSkipLinkComponent = require('./components/skip-link');

const addActiveBreakpointUtility = require('./utilities/active-breakpoint');
const addIntrinsicCenterUtility = require('./utilities/intrinsic-center');
const addDebugUtility = require('./utilities/debug');

module.exports = plugin(function (params) {
  params.prefixObject = createPrefixer(
    params.config('captain.prefix.objects'),
    params.config('prefix')
  );
  params.prefixComponent = createPrefixer(
    params.config('captain.prefix.components'),
    params.config('prefix')
  );

  addClusterComponent(params);
  addFrameComponent(params);
  addStackComponent(params);
  addWrapperComponent(params);

  addSkipLinkComponent(params);

  addActiveBreakpointUtility(params);
  addIntrinsicCenterUtility(params);
  addDebugUtility(params);
}, defaultConfig);
