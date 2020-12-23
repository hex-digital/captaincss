/**
 * However, it can also intrinsically
 * center the content, based on its natural, content-based widths, using the `o-content--intrinsic-center`. This means
 * elements that are not 100% width will appear in the middle of the container, which can be preferable.
 */

const { pluginDisabled } = require('../utilities');

module.exports = function ({ addUtilities, config }) {
  if (pluginDisabled('intrinsicCenter', config)) return;

  addUtilities([
    {
      '.intrinsic-center': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  ]);
};
