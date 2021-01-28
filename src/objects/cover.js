/**
 * -=-=-=-=-=-=-=-=-
 *      COVER
 * -=-=-=-=-=-=-=-=-
 * A cover is usually a full—or almost full—screen element, with a big title in the center. It can also have a heading
 * towards the top and a footer towards the bottom of the cover.
 *
 * If using top or bottom content, it is advised to give a margin bottom and a margin top to that content respectively,
 * to ensure it is well spaced on shorter screens.
 */

const { pluginDisabled } = require('../utilities');

module.exports = function ({
  addComponents,
  config,
  theme,
  variants,
  e,
  prefixObject,
  elSep,
  modSep,
}) {
  if (pluginDisabled('cover', config)) return;

  const minHeights = theme('cover.minHeight');

  const cover = {
    [prefixObject('.cover')]: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 'var(--cover-min-height)',
    },
    [prefixObject(`.cover${elSep}main`)]: {
      marginBottom: 'auto',
      marginTop: 'auto',
    },
  };

  addComponents(cover, {
    respectPrefix: false,
    variants: variants('cover'),
  });

  const coverMinHeightModifiers = [];

  for (const [modifier, minHeightValue] of Object.entries(minHeights)) {
    const mod = modifier === 'DEFAULT' ? '' : `${modSep}${modifier}`;

    const style = {
      [prefixObject(`.${e(`cover${mod}`)}`)]: {
        '--cover-min-height': minHeightValue,
      },
    };

    if (modifier === 'DEFAULT') {
      // Default should come before the other modifiers, so that it can be overridden
      coverMinHeightModifiers.unshift(style);
    } else {
      coverMinHeightModifiers.push(style);
    }
  }

  addComponents(coverMinHeightModifiers, {
    respectPrefix: false,
    variants: variants('cover'),
  });
};
