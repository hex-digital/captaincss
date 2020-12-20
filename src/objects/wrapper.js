/**
 * -=-=-=-=-=-=-=-=-
 *     WRAPPER
 * -=-=-=-=-=-=-=-=-
 * The Wrapper object is used to create the outer boundary on which page content will not exceed. It differs from a
 * container, as it's width is not breakpoint dependent, but instead is a single max-width that only takes effect
 * when the screensize is wider than that max-width.
 *
 * On all screen sizes, it applies a padding to prevent text from sitting too closely to the edges of the screen.
 *
 * A Wrapper is similar to a Content, but is designed to be used to constrain page level elements, rather than
 * individual pieces of content. You may of course use a Content inside of a Wrapper, which is expected.
 */

const _ = require('lodash');
const { extractMinWidths, mapMinWidthsToValues } = require('../utilities');

module.exports = function ({ addComponents, theme, variants, e }) {
  const screens = theme('wrapper.screens', theme('screens'));
  const minWidths = extractMinWidths(screens);
  const paddingsMap = mapMinWidthsToValues(minWidths, screens, theme('wrapper.padding'));
  const maxWidth = theme('wrapper.maxWidth');

  const generatePaddingFor = (minWidth) => {
    const paddingConfig = _.find(
      paddingsMap,
      (paddingMap) => `${paddingMap.minWidth}` === `${minWidth}`
    );

    if (!paddingConfig) {
      return {};
    }

    return {
      paddingRight: paddingConfig.value,
      paddingLeft: paddingConfig.value,
    };
  };

  const mediaPaddingRules = _(minWidths)
    .sortBy((minWidth) => parseInt(minWidth))
    .sortedUniq()
    .map((minWidth) => {
      const paddingStyles = generatePaddingFor(minWidth);

      if (_.isEmpty(paddingStyles)) return {};

      return {
        [`@media (min-width: ${minWidth})`]: {
          '.wrapper': {
            ...paddingStyles,
          },
        },
      };
    })
    .value();

  const wrapper = [
    {
      '.wrapper': {
        boxSizing: 'border-box',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '100%',
        ...generatePaddingFor(0),
      },
    },
    ...mediaPaddingRules,
  ];

  for (const [modifier, widthValue] of Object.entries(maxWidth)) {
    const mod = modifier === 'DEFAULT' ? '' : `--${modifier}`;

    wrapper.push({
      [`.${e(`wrapper${mod}`)}`]: {
        maxWidth: widthValue,
      },
    });
  }

  return addComponents(wrapper, variants('wrapper'));
};
