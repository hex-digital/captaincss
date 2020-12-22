module.exports = {
  theme: {
    activeBreakpoint: (theme) => ({
      screens: theme('screens'),
      position: ['top', 'right'],
      prefix: '',
      suffix: '',
      ignoreScreens: ['dark'],
      styles: {},
    }),
    cluster: (theme) => ({
      gap: theme('spacing'),
    }),
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
    cluster: ['responsive'],
    frame: ['responsive'],
    stack: ['responsive'],
  },
};
