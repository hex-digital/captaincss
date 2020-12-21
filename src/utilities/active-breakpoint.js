module.exports = function ({ addComponents, theme }) {
  const screens = theme('activeBreakpoint.screens');
  const prefix = theme('activeBreakpoint.prefix');
  const suffix = theme('activeBreakpoint.suffix');
  const ignoredScreens = theme('activeBreakpoint.ignoreScreens');
  const userStyles = theme('activeBreakpoint.styles');

  const position = theme('activeBreakpoint.position');
  const positionY = position[0];
  const positionX = position[1];

  const components = {
    'body::before': Object.assign(
      {
        [positionX]: '0',
        [positionY]: '0',
        backgroundColor: '#FBF7E4',
        border: '1px solid #F9F1E1',
        color: '#CBB080',
        content: `'${prefix}_ ≥ _${suffix}'`,
        fontFamily: 'sans-serif',
        fontSize: '14px',
        lineHeight: '1',
        padding: '.3em .5em',
        position: 'fixed',
        zIndex: '999999',
      },
      userStyles
    ),
  };

  Object.entries(screens)
    .filter(([screen]) => !ignoredScreens.includes(screen))
    .forEach(([screen, size]) => {
      components[`@screen ${screen}`] = {
        'body::before': {
          content: `'${prefix}${screen} ≥ ${size}${suffix}'`,
        },
      };
    });

  addComponents(components);
};
