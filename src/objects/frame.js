/**
 * -=-=-=-=-=-=-=-=-
 *      FRAME
 * -=-=-=-=-=-=-=-=-
 * The frame allows us to place any content inside of a frame, and constrain it to an aspect ratio.
 *
 * The most obvious application is cropping media, such as videos and images, to a desired aspect ratio. You can even
 * give media different aspect ratios depending on screen size or other conditions, such as portrait vs landscape
 * device orientation.
 */

const { pluginDisabled } = require('../utilities');

module.exports = function ({ addComponents, config, theme, variants, e, prefixObject, modSep }) {
  if (pluginDisabled('frame', config)) return;

  const ratios = theme('frame.ratios');

  const frame = [
    {
      [prefixObject('.frame')]: {
        '--frame-antecedent': 9,
        '--frame-consequent': 16,
        paddingBottom: 'calc(var(--frame-consequent) / var(--frame-antecedent) * 100%)',
        position: 'relative',

        '> *': {
          alignItems: 'center',
          bottom: '0',
          display: 'flex',
          justifyContent: 'center',
          left: '0',
          overflow: 'hidden',
          position: 'absolute',
          right: '0',
          top: '0',
        },

        '& > img, & > video': {
          height: '100%',
          objectFit: 'cover',
          width: '100%',
        },
      },
    },
  ];

  for (const [ratioName, ratioPair] of Object.entries(ratios)) {
    const [antecedent, consequent] = ratioPair.split(':');
    frame.push({
      [prefixObject(`.${e(`frame${modSep}${ratioName}`)}`)]: {
        '--frame-antecedent': antecedent,
        '--frame-consequent': consequent,
      },
    });
  }

  return addComponents(frame, {
    respectPrefix: false,
    variants: variants('frame'),
  });
};
