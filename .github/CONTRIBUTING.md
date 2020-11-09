# Contributing

Thanks for your interest in contributing to CaptainCSS! Please take a moment to review this document **before submitting a pull request**.

## Pull requests

**Please ask first before starting work on any significant new features.**

It's never a fun experience to have your pull request declined after investing a lot of time and effort into a new feature. To avoid this from happening, we request that contributors create [an issue](https://github.com/hex-digital/captaincss/issues) to first discuss any significant new features. This includes things like adding new objects or utilities, creating new settings or tools, etc.

## Coding standards

Our code formatting rules are defined in [.eslintrc](https://github.com/hex-digital/captaincss/blob/main/.eslintrc.json). You can check your code against these standards by running:

```sh
yarn run style
```

To automatically fix any style violations in your code, you can run:

```sh
yarn run style -- --fix
```

## Running tests

You can run the test suite using the following commands:

```sh
yarn test
```

Please ensure that the tests are passing when submitting a pull request. If you're adding new features to CaptainCSS, please include tests.

## Building the CSS and trying your changes manually

In addition to the automated tests, if you'd like to test the generated CSS manually with your own test HTML file, you can use the captaincss-test-project.

This project maintains a test suite with a webpack config. It will pull in Tailwind and CaptainCSS, build the project and output a local server on which you can test your changes.
