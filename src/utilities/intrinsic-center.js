/**
 * However, it can also intrinsically
 * center the content, based on its natural, content-based widths, using the `o-content--intrinsic-center`. This means
 * elements that are not 100% width will appear in the middle of the container, which can be preferable.
 */

module.exports = function ({ addUtilities, config }) {
  if (config('captain.plugins.intrinsicCenter') === false) return;

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
