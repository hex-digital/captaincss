/**
 * -=-=-=-=-=-=-=-=-
 *     CLUSTER
 * -=-=-=-=-=-=-=-=-
 * The cluster solves a common problem of grouping undetermined width, non-block elements together compactly, but with
 * consistent spacing to the sides and above or below the component. It does this without leaving extra space on the
 * end components, by stripping it away with a negative margin.
 *
 * It is great for grouping list items, buttons or anything else that needs consistent spacing, even when wrapping
 * onto multiple lines.
 */

const { pluginDisabled } = require('../utilities');

module.exports = function ({ addComponents, config, theme, variants, e }) {
  if (pluginDisabled('cluster', config)) return;

  const gap = theme('cluster.gap');

  const cluster = [
    {
      '.cluster': {
        overflow: 'hidden',

        '> *': {
          alignItems: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        },
      },
    },
  ];

  for (const [modifier, spacingValue] of Object.entries(gap)) {
    cluster.push({
      [`.${e(`cluster--${modifier}`)} > *`]: {
        margin: `calc((${spacingValue} / 2) * -1)`,
      },
      [`.${e(`cluster--${modifier}`)} > * > *`]: {
        margin: `calc(${spacingValue} / 2)`,
      },
    });
  }

  return addComponents(cluster, variants('cluster'));
};
