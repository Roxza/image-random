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
