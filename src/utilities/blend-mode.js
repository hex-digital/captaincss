const { pluginDisabled } = require('../utilities');

module.exports = function ({ addUtilities, config, variants }) {
  if (pluginDisabled('blendMode', config)) return;

  const blendUtilities = {
    '.blend-color': { mixBlendMode: 'color' },
    '.blend-color-burn': { mixBlendMode: 'color-burn' },
    '.blend-color-dodge': { mixBlendMode: 'color-dodge' },
    '.blend-darken': { mixBlendMode: 'darken' },
    '.blend-difference': { mixBlendMode: 'difference' },
    '.blend-exclusion': { mixBlendMode: 'exclusion' },
    '.blend-hard-light': { mixBlendMode: 'hard-light' },
    '.blend-hue': { mixBlendMode: 'hue' },
    '.blend-lighten': { mixBlendMode: 'lighten' },
    '.blend-luminosity': { mixBlendMode: 'luminosity' },
    '.blend-multiply': { mixBlendMode: 'multiply' },
    '.blend-normal': { mixBlendMode: 'normal' },
    '.blend-overlay': { mixBlendMode: 'overlay' },
    '.blend-saturation': { mixBlendMode: 'saturation' },
    '.blend-screen': { mixBlendMode: 'screen' },
    '.blend-soft-light': { mixBlendMode: 'soft-light' },
  };

  const backgroundBlendUtilities = {
    '.bg-blend-color': { backgroundBlendMode: 'color' },
    '.bg-blend-color-burn': { backgroundBlendMode: 'color-burn' },
    '.bg-blend-color-dodge': { backgroundBlendMode: 'color-dodge' },
    '.bg-blend-darken': { backgroundBlendMode: 'darken' },
    '.bg-blend-difference': { backgroundBlendMode: 'difference' },
    '.bg-blend-exclusion': { backgroundBlendMode: 'exclusion' },
    '.bg-blend-hue': { backgroundBlendMode: 'hue' },
    '.bg-blend-hard-light': { backgroundBlendMode: 'hard-light' },
    '.bg-blend-lighten': { backgroundBlendMode: 'lighten' },
    '.bg-blend-luminosity': { backgroundBlendMode: 'luminosity' },
    '.bg-blend-multiply': { backgroundBlendMode: 'multiply' },
    '.bg-blend-normal': { backgroundBlendMode: 'normal' },
    '.bg-blend-overlay': { backgroundBlendMode: 'overlay' },
    '.bg-blend-saturation': { backgroundBlendMode: 'saturation' },
    '.bg-blend-screen': { backgroundBlendMode: 'screen' },
    '.bg-blend-soft-light': { backgroundBlendMode: 'soft-light' },
  };

  const isolationUtilities = {
    '.isolation-isolate': { isolation: 'isolate' },
    '.isolation-auto': { isolation: 'auto' },
  };

  addUtilities(blendUtilities, variants('mixBlendMode'));
  addUtilities(backgroundBlendUtilities, variants('backgroundBlendMode'));
  addUtilities(isolationUtilities, variants('isolation'));
};
