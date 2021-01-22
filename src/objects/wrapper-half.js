/**
 * -=-=-=-=-=-=-=-=-
 *   WRAPPER HALF
 * -=-=-=-=-=-=-=-=-
 * The Wrapper Half object is used when you have a container that needs to wrap only on one side.
 *
 * An example may be having a title on the left that should line up with the rest of the wrapped content, but an
 * image on the right that you want to expand all the way up to the edge of the screen.
 *
 *   <div class="layout">
 *     <div class="layout__item md:w-1/2">
 *       <div class="wrapper md:wrapper-half md:wrapper-half--left">
 *         <h1>Title Here</h1>
 *       </div>
 *     </div>
 *     <div class="layout__item md:w-1/2">
 *       <img alt="" src="..." class="w-full">
 *     </div>
 *   </div>
 *
 * The above code creates two sections that stack, which become two columns side-by-side on screen md and up.
 *
 * The first column is normally wrapped up to md, where it switches to a half wrapper. This allows it to
 * sit next to the second column, which is unwrapped, while keeping in line with other wrapped content.
 *
 * The second column is always unwrapped. This means it will always expand to the edge of its container (the layout).
 */

const _ = require('lodash');
const reduceCSSCalc = require('reduce-css-calc');
const { pluginDisabled } = require('../utilities');

module.exports = function ({ addComponents, config, theme, variants, e, prefixObject }) {
  if (pluginDisabled('wrapper-half', config)) return;

  let padding = theme('wrapper.padding');
  if (_.isString(padding)) {
    padding = { DEFAULT: padding };
  }

  let maxWidth = theme('wrapper.maxWidth');
  if (_.isString(maxWidth)) {
    maxWidth = { DEFAULT: maxWidth };
  }

  const wrapperHalf = [
    {
      [prefixObject('.wrapper-half')]: {
        width: '50%',
      },
    },
  ];

  for (const [modifier, widthValue] of Object.entries(maxWidth)) {
    const mod = modifier === 'DEFAULT' ? '' : `--${modifier}`;

    const style = {
      [prefixObject(`.${e(`wrapper-half${mod}`)}`)]: {
        maxWidth: reduceCSSCalc(`calc(${widthValue} / 2)`),
      },
    };
    if (modifier === 'DEFAULT') {
      // Default should come before the other modifiers, so that it can be overridden
      wrapperHalf.unshift(style);
    } else {
      wrapperHalf.push(style);
    }
  }

  addComponents(wrapperHalf, {
    respectPrefix: false,
    variants: variants('wrapperHalf'),
  });

  const wrapperSides = [];

  for (let [screenName, paddingValue] of Object.entries(padding)) {
    let style = {
      [prefixObject('.wrapper-half--left')]: {
        marginLeft: 'auto',
        marginRight: 'unset',
        paddingLeft: paddingValue,
        paddingRight: 'unset',
      },
      [prefixObject('.wrapper-half--right')]: {
        marginLeft: 'unset',
        marginRight: 'auto',
        paddingLeft: 'unset',
        paddingRight: paddingValue,
      },
    };

    if (screenName !== 'DEFAULT') {
      style = {
        [`@screen ${screenName}`]: {
          ...style,
        },
      };
    }

    wrapperSides.push(style);
  }

  addComponents(wrapperSides, {
    respectPrefix: false,
    variants: variants('wrapperHalfSides'),
  });
};
