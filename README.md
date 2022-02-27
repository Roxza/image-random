
[![DeepScan grade](https://deepscan.io/api/teams/17008/projects/20329/branches/552114/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=17008&pid=20329&bid=552114)
[![NPM info](https://img.shields.io/npm/dt/image-random?color=39F4B6)](https://www.npmjs.com/package/image-random)
[![GitHub stars](https://img.shields.io/github/stars/roxza/image-random?color=888BFF)](https://github.com/roxza/image-random/stargazers)
[![GitHub issues](https://img.shields.io/github/issues-raw/roxza/image-random)](https://github.com/roxza/image-random/issues)

[![NPM Info](https://nodei.co/npm/image-random.png?downloads=true&stars=true)](https://www.npmjs.com/package/image-random)

<h1 align="center">Random Animal/Anime İmage</h1>
<h6 align="center">Developed with ❤️ by Roxza#2999(Discord)</h6>

# 📦Installation

```console
npm i image-random --save
yarn add image-random
```

<img width="400px" src="https://c.tenor.com/18DgZ_yiwLEAAAAC/cats-typing.gif">

# 📝 Usage

```js
const rimg = require("image-random");

/* Animal */

rimg
  .animal("dog")
  .then((img) => console.log(img))
  .catch(console.error);

/* Anime */

rimg
  .anime("hug")
  .then((img) => console.log(img))
  .catch(console.error);

/* Memes */

rimg
  .memes()
  .then((img) => console.log(img))
  .catch(console.error);
```

# 🐈 Animal names

- dog
- cat
- panda
- fox
- red_panda
- koala
- bird
- raccoon
- kangaroo
- bunny
- duck
- lizard
- shiba

# Anime Genres

- wink
- pat
- hug
- kiss

# ❤️ APIs used

- some-random-api.ml / Animal - Anime
- kawaii.red / Anime Kiss
- nekos.life / Lizard
- shibe.online / Shiba
- random-d.uk / Duck
- api.bunnies.io / Bunny

# License

MIT
