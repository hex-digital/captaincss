const prefixSelector = require('tailwindcss/lib/util/prefixSelector').default;

module.exports = function createPrefixer(prefix, fallbackPrefix) {
  if (!prefix) prefix = fallbackPrefix;

  return function (selector) {
    return prefixSelector(prefix, selector);
  };
};
