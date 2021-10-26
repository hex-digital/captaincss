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

  const supportFlexGap = config('captain.support.flexGap') || false;

  let gap = theme('cluster.gap');
  if (_.isString(gap)) {
    gap = { DEFAULT: gap };
  }

  let cluster;

  // With Flexbox Gap we no longer need the outer wrapping element
  if (supportFlexGap) {
    cluster = {
      [prefixObject('.cluster')]: {
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        gap: `var(--cluster-y-space, ${gap.DEFAULT}) var(--cluster-x-space, ${gap.DEFAULT})`,
        justifyContent: 'flex-start',
      },
    };
  } else {
    cluster = {
      [prefixObject('.cluster')]: {
        overflow: 'hidden',
      },
      [prefixObject('.cluster > *')]: {
        alignItems: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        margin: `calc((var(--cluster-y-space, ${gap.DEFAULT}) / 2) * -1) calc((var(--cluster-x-space, ${gap.DEFAULT}) / 2) * -1)`,
      },

      [prefixObject('.cluster > * > *')]: {
        margin: `calc(var(--cluster-y-space, ${gap.DEFAULT}) / 2) calc(var(--cluster-x-space, ${gap.DEFAULT}) / 2)`,
      },
    };
  }

  addComponents(cluster, {
    respectPrefix: false,
    variants: variants('cluster'),
  });

  const clusterModifiers = [];

  for (const [modifier, spacingValue] of Object.entries(gap)) {
    const mod = modifier === 'DEFAULT' ? '' : `${modSep}${modifier}`;

    const style = {
      [prefixObject(`.${e(`cluster${mod}`)}`)]: {
        '--cluster-x-space': spacingValue,
        '--cluster-y-space': spacingValue,
      },
    };
    if (modifier !== 'DEFAULT') {
      style[prefixObject(`.${e(`cluster${modSep}x-${modifier}`)}`)] = {
        '--cluster-x-space': spacingValue,
      };
      style[prefixObject(`.${e(`cluster${modSep}y-${modifier}`)}`)] = {
        '--cluster-y-space': spacingValue,
      };
    }

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
