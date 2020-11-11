const TailwindExportConfig = require('tailwindcss-export-config');

const pluginName = 'captaincss';

const defaultOptions = {
  config: '.',
  destination: 'node_modules/.cache/captaincss/_tailwind.config',
  format: 'scss',
  prefix: 'tw',
  flat: false,
  quotedKeys: true,
  preserveKeys: ['colors', 'screens'],
};

class Captaincss {
  constructor(userOpts = {}) {
    this.userOpts = userOpts;
    this.options = Object.assign(defaultOptions, userOpts);
  }

  apply(compiler) {
    compiler.hooks.beforeRun.tap(pluginName, () => {
      if (!this.userOpts.config) {
        console.warn(
          `${pluginName}:`,
          `No config key provided. Using default ${this.options.config}`
        );
      }

      // TODO Allow options to be passed via the plugin
      const converter = new TailwindExportConfig(defaultOptions);

      // writeToFile returns a promise so we can chain off it
      converter
        .writeToFile()
        .then(() => {
          console.log(`${pluginName}: Tailwind config exported to`, defaultOptions.destination);
        })
        .catch((error) => {
          console.warn(`${pluginName}:`, error.message);
        });
    });
  }
}

module.exports = Captaincss;
