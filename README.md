<h1 align="center">Welcome to timemachine.js 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Kotlia/timemachine#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Kotlia/timemachine/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/Kotlia/timemachine/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/Kotlia/timemachine.js" />
  </a>
  <a href="https://twitter.com/_Kotlia" target="_blank">
    <img alt="Twitter: _Kotlia" src="https://img.shields.io/twitter/follow/_Kotlia.svg?style=social" />
  </a>
</p>

> Make your variable survive reboot

[![Image from Gyazo](https://i.gyazo.com/12909c48dfe73768dc5df9559130ce51.gif)](https://gyazo.com/12909c48dfe73768dc5df9559130ce51)

```javascript
import Timemachine from "timemachine.js";

Timemachine.globaloption //defines config that will be applied to every Timemachines
    .setLocation("../assets/timemachine.db") //location of the database
    .setInterval(500) //interval to save the variable

new Timemachine({
    //declare "timemachine-variables" here
    counter: 0
}, import.meta) //import.mete - required

setInterval(() => {
    //"timemachine-variables" can be accessed outside the class.
    console.log(counter)
    //can be incremented, decremented, added, subtracted, and so on...
    counter++
}, 200)
```

## Install

```sh
yarn install
```

## Run tests

```sh
yarn run test
```

## Author

👤 **Kotlia**

* Twitter: [@_Kotlia](https://twitter.com/\_Kotlia)
* Github: [@Kotlia](https://github.com/Kotlia)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## 📝 License

Copyright © 2020 [Kotlia](https://github.com/Kotlia).<br />
This project is [MIT](https://github.com/Kotlia/timemachine/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
