/**
 * -=-=-=-=-=-=-=-=-
 *   WRAPPER EDGE
 * -=-=-=-=-=-=-=-=-
 * The Wrapper Edge object is used when you have a container that needs to wrap only on one side.
 *
 * An example may be having a title on the left that should line up with the rest of the wrapped content, but an
 * image on the right that you want to expand all the way up to the edge of the screen.
 *
 *   <div class="layout">
 *     <div class="layout__item md:w-1/2">
 *       <div class="wrapper md:wrapper-edge md:wrapper-edge--left">
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
 * The first column is normally wrapped up to md, where it switches to an edge wrapper. This allows it to
 * sit next to the second column, which is unwrapped, while keeping in line with other wrapped content.
 *
 * The second column is always unwrapped. This means it will always expand to the edge of its container (the layout).
 */

const _ = require('lodash');
const reduceCSSCalc = require('reduce-css-calc');
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
  if (pluginDisabled('wrapperEdge', config)) return;

  let padding = theme('wrapper.padding');
  if (_.isString(padding)) {
    padding = { DEFAULT: padding };
  }

  let maxWidth = theme('wrapper.maxWidth');
  if (_.isString(maxWidth)) {
    maxWidth = { DEFAULT: maxWidth };
  }

  const wrapperEdge = [];

  for (const [modifier, widthValue] of Object.entries(maxWidth)) {
    const mod = modifier === 'DEFAULT' ? '' : `${modSep}${modifier}`;

    const style = {
      [prefixObject(`.${e(`wrapper-edge${mod}`)}`)]: {
        maxWidth: reduceCSSCalc(`calc(${widthValue} / 2)`),
      },
    };
    if (modifier === 'DEFAULT') {
      // Default should come before the other modifiers, so that it can be overridden
      wrapperEdge.unshift(style);
    } else {
      wrapperEdge.push(style);
    }
  }

  addComponents(wrapperEdge, {
    respectPrefix: false,
    variants: variants('wrapperEdge'),
  });

  const wrapperSides = [];

  for (let [screenName, paddingValue] of Object.entries(padding)) {
    let style = {
      [prefixObject(`.wrapper-edge${modSep}left`)]: {
        marginLeft: 'auto',
        marginRight: 'unset',
        paddingLeft: paddingValue,
        paddingRight: 'unset',
      },
      [prefixObject(`.wrapper-edge${modSep}right`)]: {
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
    variants: variants('wrapperEdgeSides'),
  });
};
