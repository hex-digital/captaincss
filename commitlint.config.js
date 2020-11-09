module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'refactor',
        'build',
        'chore',
        'ci',
        'docs',
        'perf',
        'revert',
        'style',
        'test',
      ],
    ],
  },
};
