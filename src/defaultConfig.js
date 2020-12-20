module.exports = {
  theme: {
    stack: (theme) => ({
      gap: theme('spacing'),
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
    stack: ['responsive'],
  },
};
