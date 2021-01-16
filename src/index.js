const plugin = require('tailwindcss/plugin');
const defaultConfig = require('../stubs/defaultConfig.stub');

const createPrefixer = require('./util/createPrefixer');

const addClusterComponent = require('./objects/cluster');
const addFrameComponent = require('./objects/frame');
const addStackComponent = require('./objects/stack');
const addWrapperComponent = require('./objects/wrapper');
const addCoverComponent = require('./objects/cover');
const addCappedGridComponent = require('./objects/capped-grid');
const addLayoutComponent = require('./objects/layout');

const addSkipLinkComponent = require('./components/skip-link');

const addActiveBreakpointUtility = require('./utilities/active-breakpoint');
const addIntrinsicCenterUtility = require('./utilities/intrinsic-center');
const addBlendModeUtility = require('./utilities/blend-mode');
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
  addCoverComponent(params);
  addCappedGridComponent(params);
  addLayoutComponent(params);

  addSkipLinkComponent(params);

  addActiveBreakpointUtility(params);
  addIntrinsicCenterUtility(params);
  addBlendModeUtility(params);
  addDebugUtility(params);
}, defaultConfig);
