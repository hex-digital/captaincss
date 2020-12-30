const { pluginDisabled } = require('../utilities');

module.exports = function ({ addUtilities, config, theme, e }) {
  if (process.env.NODE_ENV === 'production') return;
  if (pluginDisabled('activeBreakpoint', config)) return;

  const screens = theme('activeBreakpoint.screens');
  const prefix = theme('activeBreakpoint.prefix');
  const suffix = theme('activeBreakpoint.suffix');
  const ignoredScreens = theme('activeBreakpoint.ignoreScreens');
  const userStyles = theme('activeBreakpoint.styles');

  let selector = theme('activeBreakpoint.selector');
  const pseudo = theme('activeBreakpoint.pseudo');

  let sanitisedSelector;
  const firstChar = selector.charAt(0);
  const selectorIsClassOrId = firstChar === '.' || firstChar === '#';

  // We must not sanitise the first char if it's . or #, as that will escape it
  selector = selectorIsClassOrId ? firstChar + e(selector.substring(1)) : e(selector);

  sanitisedSelector = `${selector}::${e(pseudo)}`;

  const position = theme('activeBreakpoint.position');
  const positionY = position[0];
  const positionX = position[1];

  const components = {
    [sanitisedSelector]: Object.assign(
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
        [sanitisedSelector]: {
          content: `'${prefix}${screen} ≥ ${size}${suffix}'`,
        },
      };
    });

  addUtilities(components);
};
