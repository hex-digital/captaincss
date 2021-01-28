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

const _ = require('lodash');
const { pluginDisabled } = require('../utilities');

module.exports = function ({ addComponents, config, theme, variants, e, prefixObject, modSep }) {
  if (pluginDisabled('cluster', config)) return;

  let gap = theme('cluster.gap');
  if (_.isString(gap)) {
    gap = { DEFAULT: gap };
  }

  const cluster = {
    [prefixObject('.cluster')]: {
      overflow: 'hidden',
    },
    [prefixObject('.cluster > *')]: {
      alignItems: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      margin: `calc((var(--cluster-space) / 2) * -1)`,
    },

    [prefixObject('.cluster > * > *')]: {
      margin: `calc(var(--cluster-space) / 2)`,
    },
  };

  addComponents(cluster, {
    respectPrefix: false,
    variants: variants('cluster'),
  });

  const clusterModifiers = [];

  for (const [modifier, spacingValue] of Object.entries(gap)) {
    const mod = modifier === 'DEFAULT' ? '' : `${modSep}${modifier}`;

    const style = {
      [prefixObject(`.${e(`cluster${mod}`)}`)]: {
        '--cluster-space': spacingValue,
      },
    };

    if (modifier === 'DEFAULT') {
      // Default should come before the other modifiers, so that it can be overridden
      clusterModifiers.unshift(style);
    } else {
      clusterModifiers.push(style);
    }
  }

  addComponents(clusterModifiers, {
    respectPrefix: false,
    variants: variants('cluster'),
  });
};
