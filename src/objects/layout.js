/**
 * -=-=-=-=-=-=-=-=-
 *     LAYOUT
 * -=-=-=-=-=-=-=-=-
 * This plugin provides a flexbox layout object. The Layout Object is powered by Flex, and is great for laying out objects
 * in one dimensions - in a row or in a column. If you're getting into 2 dimensions, a CSS Grid is usually better.
 *
 * Layout items are full-width and will stack on top of each other by default:
 *
 *   <div class="layout">
 *     <div>Column 1</div>
 *     <div>Column 2</div>
 *   </div>
 *
 * Layout Items will in most cases be accompanied by utility classes that divide
 * the layout into fractions. These are provided by Tailwind:
 *
 *   <div class="layout">
 *     <div class="w-1/2"> </div>
 *     <div class="w-1/2"> </div>
 *   </div>
 *
 * Using Tailwind's responsive modifier classes, we can create something more complicated:
 *
 *   <div class="layout">
 *     <div class="w-full  md:w-1/3"> </div>
 *     <div class="w-1/2  md:w-1/3"> </div>
 *     <div class="w-1/2  md:w-1/3"> </div>
 *   </div>
 *
 * The above will create a layout in which the first item will be 100% width
 * until we enter our medium breakpoint, when it will become 33.333% width. The
 * second and third items will be 50% of their parent, until they also become
 * 33.333% width at the medium breakpoint.
 *
 * Several modifier classes are provided. For example, `layout-auto` will
 * divide the space equally between all containing layout items without the need
 * for width utility classes.
 *
 *   <div class="layout layout-auto">
 *     <div>Column 1, 25% width</div>
 *     <div>Column 2, 25% width</div>
 *     <div>Column 3, 25% width</div>
 *     <div>Column 4, 25% width</div>
 *   </div>
 */

const _ = require('lodash');
const { pluginDisabled } = require('../utilities');

module.exports = function ({
  addComponents,
  config,
  theme,
  variants,
  e,
  prefix,
  prefixObject,
  elSep,
  modSep,
}) {
  if (pluginDisabled('layout', config)) return;

  // Disabling this for now as we haven't solved how to get two 50% containers without wrapping when they have a gap applied
  const supportFlexGap = false; // config('captain.support.flexGap') || false;

  let gap = theme('layout.gap');
  if (_.isString(gap)) {
    gap = { DEFAULT: gap };
  }

  const defaultGap = gap.DEFAULT || '0';
  const layoutItemClass = supportFlexGap ? `.layout > *` : `.layout${elSep}item`;

  /**
   * 1. We need to defensively reset any box-model properties.
   * 2. Allows us to use the layout object on any type of element.
   * 3. Use the negative margin trick for multi-row grids:
   *    http://csswizardry.com/2011/08/building-better-grid-systems/
   */
  let layout;
  if (supportFlexGap) {
    layout = {
      [prefixObject('.layout')]: {
        '--layout-x-gap': defaultGap,
        '--layout-y-gap': defaultGap,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        listStyle: 'none' /* [2] */,
        gap: `var(--layout-y-gap, ${defaultGap}) var(--layout-x-gap, ${defaultGap})`,
      },
    };
  } else {
    layout = {
      [prefixObject('.layout')]: {
        '--layout-x-gap': defaultGap,
        '--layout-y-gap': defaultGap,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        margin: '0' /* [1] */,
        padding: '0' /* [1] */,
        listStyle: 'none' /* [2] */,
        marginTop: `calc(var(--layout-y-gap, ${defaultGap}) * -1)` /* [3] */,
        marginLeft: `calc(var(--layout-x-gap, ${defaultGap}) * -1)` /* [3] */,
      },
    };
  }

  addComponents(layout, {
    respectPrefix: false,
    variants: variants('layout'),
  });

  /**
   * 1. Required in order to combine fluid widths with fixed gutters.
   * 2. By default, all layout items are full-width (mobile first).
   * 3. Gutters provided by left padding on the x-axis and margin on the y-axis:
   *    http://csswizardry.com/2011/08/building-better-grid-systems/
   * 4. Set a default order, so we can increase or decrease that number with
   *    our `.is-first` and `.is-last` state classes.
   */
  let layoutItem;
  if (supportFlexGap) {
    layoutItem = {
      [prefixObject(layoutItemClass)]: {
        boxSizing: 'border-box' /* [1] */,
        width: '100%' /* [2] */,
        order: '5' /* [4] */,
      },
    };
  } else {
    layoutItem = {
      [prefixObject(layoutItemClass)]: {
        boxSizing: 'border-box' /* [1] */,
        width: '100%' /* [2] */,
        marginTop: `var(--layout-y-gap, ${defaultGap})` /* [3] */,
        paddingLeft: `var(--layout-x-gap, ${defaultGap})` /* [3] */,
        order: '5' /* [4] */,
      },
    };
  }

  addComponents(layoutItem, {
    respectPrefix: false,
    variants: variants('layoutItem'),
  });

  const layoutItemOrder = {
    [prefixObject(layoutItemClass) + prefix(`.is-first`)]: {
      order: '1',
    },
    [prefixObject(layoutItemClass) + prefix(`.is-last`)]: {
      order: '10',
    },
  };

  addComponents(layoutItemOrder, {
    respectPrefix: false,
    variants: variants('layoutItemOrder'),
  });

  const layoutGapModifiers = [];

  // We need to manually handle responsive modifiers, as relying on the automated responsive variant will put the
  // screen prefix on the layout item, i.e. `md:layout-item` rather than `md:layout-gap-{x}`
  let responsive = false;
  const layoutGapVariants = variants('layoutGaps');
  if (layoutGapVariants.includes('responsive')) {
    responsive = true;
    layoutGapVariants.splice('responsive');
  }

  const buildLayoutComponents = (screenPrefix) => {
    const prefixedLayoutGapModifiers = {};
    const prefixedXYLayoutGapModifiers = {};

    for (const [modifier, gapSize] of Object.entries(gap)) {
      if (modifier === 'DEFAULT') continue; // Covered in the base block styles

      // Prefix object without screenPrefix on it, then add screenPrefix afterwards, otherwise we get o-md:layout-item
      let layoutClass = prefixObject(`.${e(`layout${modSep}gap-${modifier}`)}`);
      layoutClass = '.' + screenPrefix + layoutClass.slice(1);
      let layoutXClass = prefixObject(`.${e(`layout${modSep}gap-x-${modifier}`)}`);
      layoutXClass = '.' + screenPrefix + layoutXClass.slice(1);
      let layoutYClass = prefixObject(`.${e(`layout${modSep}gap-y-${modifier}`)}`);
      layoutYClass = '.' + screenPrefix + layoutYClass.slice(1);

      const style = {
        [layoutClass]: {
          '--layout-x-gap': gapSize,
          '--layout-y-gap': gapSize,
        },
      };
      const XYStyle = {
        [layoutXClass]: {
          '--layout-x-gap': gapSize,
        },
        [layoutYClass]: {
          '--layout-y-gap': gapSize,
        },
      };

      Object.assign(prefixedLayoutGapModifiers, style);
      Object.assign(prefixedXYLayoutGapModifiers, XYStyle);
    }

    /* Keep the -x-gap and -y-gap modifiers AFTER the -gap modifiers so they can override */
    return { ...prefixedLayoutGapModifiers, ...prefixedXYLayoutGapModifiers };
  };

  layoutGapModifiers.push(buildLayoutComponents(''));

  if (responsive) {
    layoutGapModifiers.push(
      Object.assign(
        {},
        ...Object.entries(theme('screens')).map(([screen]) => {
          return {
            [`@screen ${screen}`]: buildLayoutComponents(`${screen}\\:`),
          };
        })
      )
    );
  }

  addComponents(layoutGapModifiers, {
    respectPrefix: false,
    variants: layoutGapVariants,
  });

  const layoutModifiers = {
    [prefixObject(`.layout${modSep}auto > ${supportFlexGap ? '*' : layoutItemClass}`)]: {
      width: 'auto',
    },
  };

  addComponents(layoutModifiers, {
    respectPrefix: false,
    variants: variants('layoutModifiers'),
  });
};
