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
        DEFAULT: '20px',
        md: '40px',
        lg: '56px',
        xl: '80px',
      },
      maxWidth: {
        DEFAULT: '1080px',
        sm: '800px',
        lg: '1440px',
      },
    },
  },
  variants: {
    cluster: ['responsive'],
    frame: ['responsive'],
    stack: ['responsive'],
  },
};
