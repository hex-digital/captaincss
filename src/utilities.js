const _ = require('lodash');

/**
 * Extracts the minimum screen widths from the theme.screens object.
 * Returns these minWidths as an array of strings.
 */
module.exports.extractMinWidths = function extractMinWidths(breakpoints) {
  return _.flatMap(breakpoints, (breakpoints) => {
    if (_.isString(breakpoints)) {
      breakpoints = { min: breakpoints };
    }

    if (!Array.isArray(breakpoints)) {
      breakpoints = [breakpoints];
    }

    return _(breakpoints)
      .filter((breakpoint) => {
        return _.has(breakpoint, 'min') || _.has(breakpoint, 'min-width');
      })
      .map((breakpoint) => {
        return _.get(breakpoint, 'min-width', breakpoint.min);
      })
      .value();
  });
};

/**
 * @returns {[]|Array<{screen: string, minWidth: number, value}>}
 */
module.exports.mapMinWidthsToValues = function mapMinWidthsToValues(minWidths, screens, values) {
  if (typeof values === 'undefined') {
    return [];
  }

  if (!_.isObject(values)) {
    return [
      {
        screen: 'DEFAULT',
        minWidth: 0,
        value: values,
      },
    ];
  }

  const mapping = [];

  if (values.DEFAULT) {
    mapping.push({
      screen: 'DEFAULT',
      minWidth: 0,
      value: values.DEFAULT,
    });
  }

  _.each(minWidths, (minWidth) => {
    Object.keys(screens).forEach((screen) => {
      const screenMinWidth = _.isPlainObject(screens[screen])
        ? screens[screen].min || screens[screen]['min-width']
        : screens[screen];

      if (`${screenMinWidth}` === `${minWidth}`) {
        if (typeof values[screen] !== 'undefined') {
          mapping.push({
            screen,
            minWidth,
            value: values[screen],
          });
        }
      }
    });
  });

  return mapping;
};
