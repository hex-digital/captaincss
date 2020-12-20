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
 */

module.exports.defaults = {
  stack: {
    gap: {
      drummon: '1rem',
    },
  },
};

module.exports = function ({ addComponents, theme, e }) {
  const gap = theme('stack.gap');

  const stack = [
    {
      '.stack': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',

        '> *': {
          marginBottom: 0,
          marginTop: 0,
        },
      },
    },
  ];

  for (const [modifier, spacingValue] of Object.entries(gap)) {
    stack.push({
      [`.${e(`stack--${modifier}`)} > * + *`]: {
        marginTop: spacingValue,
      },
    });
  }

  return addComponents(stack);
};
