const { pluginDisabled } = require('../utilities');

module.exports = function ({ addUtilities, config, theme, e, variants }) {
  if (pluginDisabled('textShadow', config)) return;
  const textShadows = theme('textShadow');

  const textShadowUtilities = {};

  Object.entries(textShadows).forEach(([modifier, textShadow]) => {
    const mod = modifier === 'DEFAULT' ? '' : `-${modifier}`;

    textShadowUtilities[`.${e(`text-shadow${mod}`)}`] = {
      textShadow,
    };
  });

  addUtilities(textShadowUtilities, variants('textShadow'));
};
