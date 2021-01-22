const {pxToRemPair} = require('../helpers');

module.exports = {
  captain: {
    prefix: {
      components: 'c-', // Falsey value will default to config.prefix instead
      objects: 'o-',
    },
  },
  theme: {
    activeBreakpoint: (theme) => ({
      screens: theme('screens'),
      position: ['top', 'right'],
      prefix: '',
      suffix: '',
      ignoreScreens: ['dark'],
      styles: {},
      selector: 'body',
      pseudo: 'before',
    }),
    cappedGrid: {
      maxColumnWidth: {
        ...pxToRemPair(250),
      },
    },
    cluster: (theme) => ({
      gap: {
        DEFAULT: '1rem',
        ...theme('space'),
      },
    }),
    cover: (theme) => ({
      minHeight: {
        DEFAULT: '100vh',
        '90vh': '90vh',
        '95vh': '95vh',
        ...theme('maxHeight')
      },
    }),
    debug: {
      accessibility: false,
    },
    frame: {
      ratios: {
        '1:1': '1:1',
        '16:9': '16:9',
        golden: '1.618:1',
      },
    },
    layout: (theme) => ({
      gap: {
        DEFAULT: '1rem',
        ...theme('space'),
      },
    }),
    stack: (theme) => ({
      gap: {
        DEFAULT: '1rem',
        ...theme('space'),
      },
    }),
    skipLink: {
      styles: {},
    },
    textShadow: {
      DEFAULT: '0 2px 4px rgba(0,0,0,0.10)',
    },
    wrapper: {
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '3.5rem',
        xl: '5rem',
      },
      maxWidth: {
        DEFAULT: '80rem',
        sm: '60rem',
        lg: '90rem',
      },
    },
  },
  variants: {
    backgroundBlendMode: ['responsive', 'hover'],
    cluster: ['responsive'],
    frame: ['responsive'],
    isolation: ['responsive'],
    layout: [],
    layoutGaps: ['responsive'],
    layoutItem: [],
    layoutItemOrder: ['responsive'],
    mixBlendMode: ['responsive', 'hover'],
    stack: ['responsive'],
    wrapperBreak: ['responsive'],
    wrapperHalf: ['responsive'],
    wrapperHalfSides: ['responsive'],
  },
};
