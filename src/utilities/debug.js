const { pluginDisabled } = require('../utilities');

module.exports = function ({ addUtilities, config, theme }) {
  if (process.env.NODE_ENV === 'production') return;
  if (pluginDisabled('debug', config)) return;

  if (!theme('debug.accessibility')) return;

};