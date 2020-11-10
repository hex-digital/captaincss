<h1 align="center"><img width="279" src="https://user-images.githubusercontent.com/2754728/97885162-ec8fbf00-1d1e-11eb-9f7d-9cef86938da0.png"><br />Welcome to CaptainCSS 👋</h1>

**An extensible, scalable CSS framework that harnesses Tailwind and ITCSS to provide structure to teams and large or long-lasting projects**

A happy medium: it does not provide you with UI or design out of the box, but instead provides a solid architectural baseline upon which anything can be built.

<p>
  <a href="https://www.npmjs.com/package/@captaincss/captaincss"><img alt="Version" src="https://img.shields.io/npm/v/@captaincss/captaincss?style=for-the-badge" /></a>
  <a href="https://www.npmjs.com/package/@captaincss/captaincss"><img src="https://img.shields.io/npm/dt/@captaincss/captaincss.svg?style=for-the-badge" alt="Total Downloads"></a>
  <a href="https://github.com/hex-digital/captaincss/wiki" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-wip-red.svg?style=for-the-badge" />
  </a>
  <a href="https://github.com/hex-digital/captaincss/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@captaincss/captaincss.svg?style=for-the-badge" alt="License"></a>
  <a href="https://twitter.com/jamiew_tv" target="_blank">
    <img alt="Twitter: jamiew_tv" src="https://img.shields.io/twitter/follow/jamiew_tv.svg?style=social" />
  </a>
</p>

### 🏠 [Homepage](https://github.com/hex-digital/captaincss)

## Install

```sh
yarn add -D @captaincss/captaincss # or npm install -D @captaincss/captaincss
```

## Usage

Create a main.scss file.

```sh
cp ./node_modules/@captaincss/captaincss/scss/main.example.scss ./assets/scss/.
```

Generate a SCSS version of your tailwind config. We recommend adding to your build process.
We provide a Webpack plugin to automate this step.

```js
// webpack.config.js
const Captaincss = require('@captaincss/captaincss');

module.exports = {
  plugins: [
    // Takes Tailwind's config and outputs it to SCSS to be used
    new Captaincss(),
  ],
}
```

Use main.scss as an entry point when bundling, and you're good to go!

## Author

👤 **Jamie Warburton**

* Twitter: [@jamiew\_tv](https://twitter.com/jamiew\_tv)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/hex-digital/captaincss/issues).

Please read our [Contributing Guidelines](https://github.com/hex-digital/captaincss/blob/main/.github/CONTRIBUTING.md) first!

## Show your support

Please give a ⭐️ if this project helped you!
