<h1 align="center"><img width="279" src="https://user-images.githubusercontent.com/2754728/97885162-ec8fbf00-1d1e-11eb-9f7d-9cef86938da0.png"><br />Welcome to CaptainCSS 👋</h1>

**An extensible, scalable set of CSS objects and utilities that harness Tailwind and ITCSS to provide structure to teams and large or long-lasting projects**

Captain does not provide you with UI or design out of the box, but instead provides solid architectural layout objects and utilities, upon which anything can be built.

Talk the same language as other developers, and share a set of common objects across all of your website and app builds. All fully configurable using the native Tailwind config.

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

1. Install and setup Tailwind in your project: https://tailwindcss.com/docs/installation

2. Add CaptainCSS as a plugin in your tailwind.config.js:

```js
// tailwind.config.js
module.exports = {
  theme: {},
  plugins: [
    require('@captaincss/captaincss'),
  ],
}
```

3. Configure Captain's theme settings and variants in your tailwind config, exactly like Tailwind. Check `defaultConfig.js` for Captain's default configuration.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      frame: {
        ratio: {
          '4:3': '4:3',
        }
      }
    }
  },
  plugins: [
    require('@captaincss/captaincss'),
  ],
}
```

## Author

👤 **Jamie Warburton**

* Twitter: [@jamiew\_tv](https://twitter.com/jamiew\_tv)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/hex-digital/captaincss/issues).

Please read our [Contributing Guidelines](https://github.com/hex-digital/captaincss/blob/main/.github/CONTRIBUTING.md) first!

## Show your support

Please give a ⭐️ if this project helped you!
