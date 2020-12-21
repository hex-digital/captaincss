/**
 * -=-=-=-=-=-=-=-=-
 *     SKIPLINK
 * -=-=-=-=-=-=-=-=-
 */

module.exports = function ({ addComponents, theme, variants, e }) {
  const skipLink = [
    {
      '.skip-link': {
        clip: 'rect(1px, 1px, 1px, 1px)',
        display: 'block',
        height: '1px',
        overflow: 'hidden',
        padding: '20px',
        position: 'absolute',
        textDecoration: 'underline',
        top: '1rem',
        left: '1rem',
        width: '1px',
        zIndex: '999',

        '&:focus': {
          clip: 'auto',
          height: 'auto',
          overflow: 'visible',
          width: 'auto',
        },
      },
    },
  ];

  return addComponents(skipLink, variants('skipLink'));
};