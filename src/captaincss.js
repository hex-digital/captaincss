const path = require('path');
const TailwindExportConfig = require('tailwindcss-export-config');

const defaultOptions = {
  config: path.resolve(__dirname + '/../test/tailwind.config.js'),
  destination: 'node_modules/.cache/captaincss/_tailwind.config',
  format: 'scss',
  prefix: 'tw',
  flat: false,
  quotedKeys: true,
  preserveKeys: ['colors', 'screens'],
};

class Captaincss {
  apply(compiler) {
    compiler.hooks.beforeRun.tap('captaincss', () => {
      // TODO Allow options to be passed via the plugin
      const converter = new TailwindExportConfig(defaultOptions);

      // writeToFile returns a promise so we can chain off it
      converter
        .writeToFile()
        .then(() => {
          console.log('captaincss: Tailwind config exported to', defaultOptions.destination);
        })
        .catch((error) => {
          console.warn('captaincss:', error.message);
        });
    });
  }
}

module.exports = Captaincss;
