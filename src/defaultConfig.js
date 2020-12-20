module.exports = {
  theme: {
    cluster: (theme) => ({
      gap: theme('spacing'),
    }),
    stack: (theme) => ({
      gap: theme('spacing'),
    }),
    wrapper: {
      // Padding keys must match a screen breakpoint name or it will be ignored
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
    stack: ['responsive'],
  },
};
