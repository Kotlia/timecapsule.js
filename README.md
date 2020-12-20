<h1 align="center">Welcome to timecapsule.js 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Kotlia/timecapsule#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Kotlia/timecapsule/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/Kotlia/timecapsule/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/Kotlia/timecapsule.js" />
  </a>
  <a href="https://twitter.com/_Kotlia" target="_blank">
    <img alt="Twitter: _Kotlia" src="https://img.shields.io/twitter/follow/_Kotlia.svg?style=social" />
  </a>
</p>

> Make your variables survive reboot

[![Image from Gyazo](https://i.gyazo.com/12909c48dfe73768dc5df9559130ce51.gif)](https://gyazo.com/12909c48dfe73768dc5df9559130ce51)

Learn more about this code

```javascript
import Timecapsule from "timecapsule.js";

Timecapsule.globaloption
    .setLocation("../assets/timecapsule.db")
    .setInterval(500)

new Timecapsule({
    counter: 0
}, import.meta)

setInterval(() => {
    console.log(counter)
    counter++
}, 200)
```

## Install

```sh
yarn add timecapsule.js
```

## Author

👤 **Kotlia**

* Twitter: [@_Kotlia](https://twitter.com/\_Kotlia)
* Github: [@Kotlia](https://github.com/Kotlia)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## 📝 License

Copyright © 2020 [Kotlia](https://github.com/Kotlia).<br />
This project is [MIT](https://github.com/Kotlia/timecapsule/blob/master/LICENSE) licensed.