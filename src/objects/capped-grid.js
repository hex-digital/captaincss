/**
 * -=-=-=-=-=-=-=-=-
 *   CAPPED GRID
 * -=-=-=-=-=-=-=-=-
 * The capped grid allows us to create a dynamic, responsive grid, without using media queries.
 *
 * It gives each column a minimum width, and the grid automatically configures itself to display as many columns
 * as it can. The columns then expand evenly to fill up the remaining space.
 */

const { pluginDisabled } = require('../utilities');

module.exports = function ({ addComponents, config, theme, variants, e, prefixObject, modSep }) {
  if (pluginDisabled('cappedGrid', config)) return;

  const maxColumnWidths = theme('cappedGrid.maxColumnWidth');

  const grid = {
    [prefixObject('.capped-grid')]: {
      display: 'grid',
      gridGap: '1rem',
    },
  };

  addComponents(grid, {
    respectPrefix: false,
    variants: variants('cappedGrid'),
  });

  const gridWidthModifiers = [];

  for (const [modifier, maxColumnWidthValue] of Object.entries(maxColumnWidths)) {
    const mod = modifier === 'DEFAULT' ? '' : `${modSep}${modifier}`;

    const style = {
      [`@supports (width: min(${maxColumnWidthValue}, 100%))`]: {
        [prefixObject(`.${e(`capped-grid${mod}`)}`)]: {
          gridTemplateColumns: `repeat(auto-fit, minmax(min(${maxColumnWidthValue}, 100%), 1fr))`,
        },
      },
    };

    if (modifier === 'DEFAULT') {
      // Default should come before the other modifiers, so that it can be overridden
      gridWidthModifiers.unshift(style);
    } else {
      gridWidthModifiers.push(style);
    }
  }

  addComponents(gridWidthModifiers, {
    respectPrefix: false,
    variants: variants('cappedGrid'),
  });
};
