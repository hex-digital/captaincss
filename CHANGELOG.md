# Changelog

## [2.4.0](https://github.com/hex-digital/captaincss/compare/v2.3.1...v2.4.0) (2021-10-26)


### Features

* **layout:** allow layout to space X and Y separately ([e3a753f](https://github.com/hex-digital/captaincss/commit/e3a753f1508db76adde7412c1604cdb064d58ada))


### Bug Fixes

* **config:** use "space" for spacing and gaps on objects ([3ec1f63](https://github.com/hex-digital/captaincss/commit/3ec1f63205befd6d64aaf5a5ecb7c122c058bb73))

### [2.3.1](https://github.com/hex-digital/captaincss/compare/v2.3.0...v2.3.1) (2021-10-26)


### Bug Fixes

* **active-breakpoint:** add support for breakpoints with "min" defined ([cacd0d2](https://github.com/hex-digital/captaincss/commit/cacd0d268d74d0dd31f608e439d4a2d8ad5c45ec))
* **cluster:** fix gap default value not being used ([a6f55cb](https://github.com/hex-digital/captaincss/commit/a6f55cb51e11dffb270b841d606784eb7e0124a3))
* **config:** fix default config using "space" instead of "spacing" ([eb5ffca](https://github.com/hex-digital/captaincss/commit/eb5ffca20a3315c2ee002e1b9c290d7e082eebb4))

## [2.3.0](https://github.com/hex-digital/captaincss/compare/v2.2.4...v2.3.0) (2021-01-29)


### Features

* add ability to change modiifier and element separators ([8f98cc6](https://github.com/hex-digital/captaincss/commit/8f98cc623d2ac408dfa6d34c6c33d1fbdda25667))
* add cover and capped-grid layout objects ([236b529](https://github.com/hex-digital/captaincss/commit/236b529f3d325b1f0eca7caf36ead1ba1f65cdaa))
* add support for changing cluster x and y spacing independently ([e5aedac](https://github.com/hex-digital/captaincss/commit/e5aedac8b4317e4708c9799e04f5b62f41506964))
* add support for flex gap to cluster ([5a7fa1a](https://github.com/hex-digital/captaincss/commit/5a7fa1a0b54b570b72cc41beb3ef20bc3a27f05a))
* add Wrapper Half object ([642491c](https://github.com/hex-digital/captaincss/commit/642491c77724f5b4c45fb335161008ce1a418308))
* **layout:** add layout object ([027c827](https://github.com/hex-digital/captaincss/commit/027c82744189eff2a3d9c17bf9bdec8e8f1c9848))
* add text shadow utilities ([59514ab](https://github.com/hex-digital/captaincss/commit/59514ab5a89cce2ac8aaa536a9d5dee3ef8229a9))


### Bug Fixes

* add text shadow utility to compiled output ([6222310](https://github.com/hex-digital/captaincss/commit/6222310b036267202a253552403a6d5dd7910429))
* fix default value for flexGap in config ([46cbf4c](https://github.com/hex-digital/captaincss/commit/46cbf4cd62b9e0a9a24d00b2dbc0a33f0c464180))
* fix skip-link scrolling user to top of page when used ([68a04b1](https://github.com/hex-digital/captaincss/commit/68a04b118bbe74d8b1483a6ead32be69d1d0bfe1))

### [2.2.4](https://github.com/hex-digital/captaincss/compare/v2.2.3...v2.2.4) (2021-01-01)


### Bug Fixes

* fix for incorrect import in src/defaultConfig ([15cff58](https://github.com/hex-digital/captaincss/commit/15cff58f54866dafacefbeac955bc811045dfe41))
* fix for sanitised active breakpoint class selector ([7da790a](https://github.com/hex-digital/captaincss/commit/7da790a3a1b5536b42865d15dba47268b0eab468))
* fix nesting stacks so they no longer need extra div wrapper ([5757b47](https://github.com/hex-digital/captaincss/commit/5757b47215129ff10e5f8550b2a8d3df8013467b))

### [2.2.3](https://github.com/hex-digital/captaincss/compare/v2.2.2...v2.2.3) (2020-12-29)


### Bug Fixes

* fix indeterminate order of nested classes on stack and object ([110cc27](https://github.com/hex-digital/captaincss/commit/110cc27e6f62730d754bd1a772bb2c2caa812014))

### [2.2.2](https://github.com/hex-digital/captaincss/compare/v2.2.1...v2.2.2) (2020-12-29)


### Bug Fixes

* fix wrapper break classes ([d44b719](https://github.com/hex-digital/captaincss/commit/d44b719c4d766571ca5d1c3fcdcf6247e853b3bb))

### [2.2.1](https://github.com/hex-digital/captaincss/compare/v2.2.0...v2.2.1) (2020-12-29)


### Bug Fixes

* fix missing files in distributable ([d6302dd](https://github.com/hex-digital/captaincss/commit/d6302ddfdb08f344c89bd4a3206d34d070a0bec0))

## [2.2.0](https://github.com/hex-digital/captaincss/compare/v2.1.0...v2.2.0) (2020-12-29)


### Features

* add blend mode utilities ([618cf64](https://github.com/hex-digital/captaincss/commit/618cf64240de8f0f992cc635d47d646efc14325e))
* add custom object and component prefixing ([0b2870c](https://github.com/hex-digital/captaincss/commit/0b2870c8a462367c8f3372bbecb68c467c6eb480))
* add helpers for px, rem, em sizes ([0bf6874](https://github.com/hex-digital/captaincss/commit/0bf6874fa5b54b1063d6c4bdaccd6990dc9a0e93))
* add individual variations options for blend mode ([2bda361](https://github.com/hex-digital/captaincss/commit/2bda3619141d68698aaeee602f9caacb945e27b6))
* better override for pxToRem helpers ([baa774b](https://github.com/hex-digital/captaincss/commit/baa774b3519ce1d4c29f27b911a97d4a4adfd76c))

## [2.1.0](https://github.com/hex-digital/captaincss/compare/v2.0.0...v2.1.0) (2020-12-28)


### Features

* add a11y.css debug utility ([fd39ab8](https://github.com/hex-digital/captaincss/commit/fd39ab8ef2a20d7b36802a696bf6f663ffb9f929))
* turn debug.accessibility off by default ([bb5f974](https://github.com/hex-digital/captaincss/commit/bb5f974c065d08e8da78432f6507fb3c95a4f00a))


### Bug Fixes

* fix for active breakpoint in wrong TW layer ([a9d5394](https://github.com/hex-digital/captaincss/commit/a9d53946f246f6bf3e1381db402ef967bdfc6c2f))
* fix wrapper__wide element ([c4380b3](https://github.com/hex-digital/captaincss/commit/c4380b3e12cd25a1eca1eacb7451ec895ab072cb))

## [2.0.0](https://github.com/hex-digital/captaincss/compare/v1.4.0...v2.0.0) (2020-12-23)


### ⚠ BREAKING CHANGES

* remove now un-used SCSS dependencies from test directory and webpack

### Features

* add active breakpoint utility ([fb49ed7](https://github.com/hex-digital/captaincss/commit/fb49ed75dc2a8c8ba35a22e8444e45f2ab04e62a))
* add cluster object ([1171fd7](https://github.com/hex-digital/captaincss/commit/1171fd7626b01427d4024e0a1465c4f3d54ed61c))
* add Frame object ([4e6e107](https://github.com/hex-digital/captaincss/commit/4e6e1079f9411f9e6fd0f7d39e217d060e2c3b35))
* add intrinsic center utility ([e02a581](https://github.com/hex-digital/captaincss/commit/e02a5814072e5ead1466de0eec84f6614aac17e6))
* add responsive variants to stack by default ([1756a53](https://github.com/hex-digital/captaincss/commit/1756a53057075307f6741c2557af889a92ba0613))
* add Skip Link object ([2350733](https://github.com/hex-digital/captaincss/commit/2350733525511e81fd8089793a0cc2bcde290389))
* add Stack object ([8824791](https://github.com/hex-digital/captaincss/commit/88247918091095d38d389bb6ab51744dcf4b36f5))
* add support for shorthand string in some config.theme values ([011d863](https://github.com/hex-digital/captaincss/commit/011d863651a7d5f7d1ed3b62cc6c786bb539ad52))
* add wide and bleed elements to wrappers to allow strecthing them out ([16744f1](https://github.com/hex-digital/captaincss/commit/16744f1707e4db1e387706de9cfad1d25317e226))
* add wrapper object ([17e7226](https://github.com/hex-digital/captaincss/commit/17e7226d1f13d44e018c88d4fb9a2b56ab49b441))
* allow users to add styles to skip link via config ([6fd46e2](https://github.com/hex-digital/captaincss/commit/6fd46e23b7d35a0a066ce2eb8dd10f85825a2ab8))
* allow users to specify selector and pseudo selector for active breakpoint ([11758a0](https://github.com/hex-digital/captaincss/commit/11758a03648ee16f86c156a5c07eb7692a150ef4))
* allowing all Captains plugins to be fully disabled in config ([bc78a4f](https://github.com/hex-digital/captaincss/commit/bc78a4f5af390274025c1af669753b03ecfd1973))
* default frame without modifier to 16:9 ([2219c86](https://github.com/hex-digital/captaincss/commit/2219c861358bbbffb1a7edc2e9bd5083ac37ac0b))
* enable safelisting plugins via an array ([aee359a](https://github.com/hex-digital/captaincss/commit/aee359a9aa61494b8152462d8ee265a36dffb430))
* improve cluster theme defaults ([ac2c361](https://github.com/hex-digital/captaincss/commit/ac2c3611644c82eba02ac7f96da7faa270f545e9))
* update deps for tailwind v2 ([6ceebfb](https://github.com/hex-digital/captaincss/commit/6ceebfb03dba4dd56f495997c9b126bff07d2740))
* update README and dist files for v2 ([e6e2ae1](https://github.com/hex-digital/captaincss/commit/e6e2ae1261a70b79a8409a178b9445ddc0ec3eef))
* use rem for wrapper padding and maxWidth instead of px ([e29e249](https://github.com/hex-digital/captaincss/commit/e29e24963a21a8b63a13644bcde03bd989fe4ca5))


### Bug Fixes

* add missing tailwind config to test dir ([ed9bb48](https://github.com/hex-digital/captaincss/commit/ed9bb488dfaa31382e6aa72696e4791a09745be2))
* fix minor bugs in cluster and stack ([e2ccc77](https://github.com/hex-digital/captaincss/commit/e2ccc77eae42c80ae4225d6bbc855655ac21627c))
* fix wrapper default not being overridden ([638ce21](https://github.com/hex-digital/captaincss/commit/638ce217c33497dd59e5f85fa3441e9053eaf0aa))
* stop active-breakpoint showing when NODE_ENV production ([f56b45c](https://github.com/hex-digital/captaincss/commit/f56b45c52ad44367e730763eb28694270365b5bb))


### Code Refactoring

* remove now un-used SCSS dependencies from test directory and webpack ([a109d28](https://github.com/hex-digital/captaincss/commit/a109d28b6d887c94e0c62c3746680affe924cd1e))

## [1.4.0](https://github.com/hex-digital/captaincss/compare/v1.3.2...v1.4.0) (2020-12-19)


### Features

* add element classes to allow stretching out of wrappers ([4eb4cdc](https://github.com/hex-digital/captaincss/commit/4eb4cdceaf0b150da929c0d2d7cb98269d614be1))
* allow font helpers to have src manually specified ([c50040a](https://github.com/hex-digital/captaincss/commit/c50040a71552c548242f8b88a84465d2618df876))

### [1.3.2](https://github.com/hex-digital/captaincss/compare/v1.3.1...v1.3.2) (2020-11-11)


### Bug Fixes

* add font-display to the fontFace mixin and a mode override ([5c999e8](https://github.com/hex-digital/captaincss/commit/5c999e881dde9d673e580e69bf2bc21e1f53855b))

### [1.3.1](https://github.com/hex-digital/captaincss/compare/v1.3.0...v1.3.1) (2020-11-11)


### Bug Fixes

* fix captaincss outputting tailwind config re-triggering watched build, endlessly ([c90433d](https://github.com/hex-digital/captaincss/commit/c90433d4d0ecd97228cf926f91bc5a08ab0af266))

## [1.3.0](https://github.com/hex-digital/captaincss/compare/v1.2.2...v1.3.0) (2020-11-11)


### Features

* add fontFace mixin with a font_output_mode to output font face statements easily ([0081940](https://github.com/hex-digital/captaincss/commit/0081940a967d280b56cac873dd443468fd9594d7))


### Bug Fixes

* allow Captaincss webpack plugin to run when webpack is in watch mode as well ([5b6acab](https://github.com/hex-digital/captaincss/commit/5b6acabccd4501013e1a54a34dbf9778fdc5fbae))

### [1.2.2](https://github.com/hex-digital/captaincss/compare/v1.2.1...v1.2.2) (2020-11-11)


### Bug Fixes

* add missing scss directory to release ([9c1e61e](https://github.com/hex-digital/captaincss/commit/9c1e61e99f4397c9004a820cca7fdf7f85b04eae))

### [1.2.1](https://github.com/hex-digital/captaincss/compare/v1.2.0...v1.2.1) (2020-11-11)


### Bug Fixes

* add missing tailwindcss-export-config dependency ([c755f02](https://github.com/hex-digital/captaincss/commit/c755f0206b6922da81e4f98c177cccd287827502))

## [1.2.0](https://github.com/hex-digital/captaincss/compare/v1.1.0...v1.2.0) (2020-11-11)


### Features

* allow user to pass in own options to Captaincss webpack plugin ([c328088](https://github.com/hex-digital/captaincss/commit/c328088ea542f93dc1ef96f8466b434152cdb55e))

## [1.1.0](https://github.com/hex-digital/captaincss/compare/v1.0.4...v1.1.0) (2020-11-10)


### Features

* add o-skip-link object for screen readers ([#10](https://github.com/hex-digital/captaincss/issues/10)) ([b751921](https://github.com/hex-digital/captaincss/commit/b751921f852c640acbdd33fd1d51c4162ef89341))
* add z-index map to settings and a helper tool to captain ([#11](https://github.com/hex-digital/captaincss/issues/11)) ([3a16b5c](https://github.com/hex-digital/captaincss/commit/3a16b5c6d9ee3c35e20bfb167ee83ccf10cc92f9))
* allow theme to be overridden by adding !default to the variable ([2f7aaa6](https://github.com/hex-digital/captaincss/commit/2f7aaa62ce1deaddce74530e013dd9c55945fcac))


### Bug Fixes

* set debug to false in the captain theme by default ([38520e0](https://github.com/hex-digital/captaincss/commit/38520e0a3a6ee361c4a86448f8775a79a593097d))

### [1.0.4](https://github.com/hex-digital/captaincss/compare/v1.0.3...v1.0.4) (2020-11-09)


### Bug Fixes

* fix automatic releases ([ecdd0ae](https://github.com/hex-digital/captaincss/commit/ecdd0ae2233c3bc72086219befbbb4167888466d))

### [1.0.3](https://github.com/hex-digital/captaincss/compare/v1.0.2...v1.0.3) (2020-11-09)


### Bug Fixes

* add a commit to test workflow in GH actions ([7711c95](https://github.com/hex-digital/captaincss/commit/7711c95a313a8c8e176f42bff13d7e380a51a8b6))
