/**
 * -=-=-=-=-=-=-=-=-
 *      STACK
 * -=-=-=-=-=-=-=-=-
 * Flow elements require space to physically and conceptually separate them from the elements that come before and
 * after them. This flow space should exist solely between children elements in a container, and not between an element
 * and the container itself.
 * See https://absolutely.every-layout.dev/layouts/stack/
 *
 * The Stack object is used to style the relationship between two elements, rather than the individual elements
 * themselves. The Stack object injects margin between elements contained within it.
 *
 * This margin can change based on the relationship between those two elements. For example, a p that comes after
 * another p may have a smaller margin than a h3 that comes after a p. The Stack handles this.
 *
 * Stacks can be used within stacks as well. All nested stacks can designate their own spacing value.
 * This could be useful for laying out a form, where elements are grouped into a stack, and labels + inputs exist inside
 * of nested stacks with different spacing.
 *
 * Some elements added to a stack may have a margin bottom added by default. This will alter the spacing between the
 * elements and is usually not desirable. This margin bottom on all child elements is stripped by default. This
 * behaviour can be turned off by setting the strip prop to false.
 *
 * The stack could be built with the following Tailwind classes: flex flex-col space-y-{value}. However, it's such a
 * common layout object that it deserves its own name. This means it is more obvious and recognisable in the codebase
 * amongst other utilities, and provides a common name with which developers can reference it.
 */

const _ = require('lodash');
const { pluginDisabled } = require('../utilities');

module.exports = function ({ addComponents, config, theme, variants, e, prefixObject }) {
  if (pluginDisabled('stack', config)) return;

  let gap = theme('stack.gap');
  if (_.isString(gap)) {
    gap = { DEFAULT: gap };
  }

  const stack = {
    [prefixObject('.stack')]: {
      '--stack-reverse': '0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    [prefixObject('.stack--reverse')]: {
      '--stack-reverse': '1',
      flexDirection: 'column-reverse',
    },
    [prefixObject('.stack > *')]: {
      marginTop: '0',
      marginBottom: '0',
    },
    [prefixObject('.stack > * + *')]: {
      marginTop: 'calc(var(--stack-space) * calc(1 - var(--stack-reverse)))',
      marginBottom: 'calc(var(--stack-space) * var(--stack-reverse))',
    },
  };

  addComponents(stack, {
    respectPrefix: false,
    variants: variants('stack'),
  });

  const stackModifiers = [];

  for (const [modifier, spacingValue] of Object.entries(gap)) {
    const mod = modifier === 'DEFAULT' ? '' : `--${modifier}`;

    const style = {
      [prefixObject(`.${e(`stack${mod}`)}`)]: {
        '--stack-space': spacingValue,
      },
    };

    if (modifier === 'DEFAULT') {
      // Default should come before the other modifiers, so that it can be overridden
      stackModifiers.unshift(style);
    } else {
      stackModifiers.push(style);
    }
  }

  addComponents(stackModifiers, {
    respectPrefix: false,
    variants: variants('stack'),
  });
};
