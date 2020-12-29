module.exports = {
  captain: {
    prefix: {
      components: 'c-', // Falsey value will default to config.prefix instead
      objects: 'o-',
    }
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
    cluster: (theme) => ({
      gap: {
        DEFAULT: '1rem',
        ...theme('space'),
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
    stack: (theme) => ({
      gap: {
        DEFAULT: '1rem',
        ...theme('space'),
      },
    }),
    skipLink: {
      styles: {},
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
    blendMode: ['responsive', 'hover'],
    cluster: ['responsive'],
    frame: ['responsive'],
    stack: ['responsive'],
  },
};
