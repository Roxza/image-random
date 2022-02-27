const axios = require("axios");

class randomimage {
  static async animal(type) {
    const animal = [
      "dog",
      "cat",
      "panda",
      "fox",
      "red_panda",
      "koala",
      "bird",
      "raccoon",
      "kangaroo",
      "bunny",
      "duck",
      "lizard",
      "shiba",
    ];
    const ap = ["bunny", "duck", "lizard", "shiba"];
    try {
      if (!type) throw new TypeError("Type giriniz.");
      if (!animal.includes(type))
        throw new TypeError("Belirli Paramatreler giriniz.");
      return new Promise((resolve, reject) => {
        if (ap.includes(type)) {
          if (type == "bunny") {
            axios
              .get("https://api.bunnies.io/v2/loop/random/?media=gif,png")
              .then((res) => {
                resolve(res.data.media.gif);
              })
              .catch("Error; " + reject);
          }
          if (type == "duck") {
            axios
              .get("https://random-d.uk/api/v1/random?type=png")
              .then((res) => {
                resolve(res.data.url);
              })
              .catch("Error; " + reject);
          }
          if (type == "lizard") {
            axios
              .get("https://nekos.life/api/v2/img/lizard")
              .then((res) => {
                resolve(res.data.url);
              })
              .catch("Error; " + reject);
          }
          if (type == "shiba") {
            axios
              .get("http://shibe.online/api/shibes")
              .then((res) => {
                resolve(res.data[0]);
              })
              .catch("Error; " + reject);
          }
        } else {
          axios
            .get("https://some-random-api.ml/animal/" + type)
            .then((res) => {
              resolve(res.data.image);
            })
            .catch("Error; " + reject);
        }
      });
    } catch (err) {
      throw new TypeError(err);
    }
  }

  static async anime(type) {
    const anime = ["wink", "pat", "hug", "kiss"];
    const aniap = ["kiss"];
    try {
      if (!type) throw new TypeError("Type giriniz.");
      if (!anime.includes(type))
        throw new TypeError("Belirli Paramatreler giriniz.");
      return new Promise((resolve, reject) => {
        if (aniap.includes(type)) {
          if (type == "kiss") {
            axios
              .get(
                "https://kawaii.red/api/gif/kiss/token=852918160730357789.eZzH57JkZ9Nb81aMGCGM/"
              )
              .then((res) => {
                resolve(res.data.response);
              })
              .catch("Error; " + reject);
          }
        } else {
          axios
            .get("https://some-random-api.ml/animu/" + type)
            .then((res) => {
              resolve(res.data.link);
            })
            .catch("Error; " + reject);
        }
      });
    } catch (err) {
      throw new TypeError(err);
    }
  }
  static async memes() {
    try {
      return new Promise((resolve, reject) => {
        axios
          .get("https://some-random-api.ml/meme")
          .then((res) => {
            resolve(res.data.image);
          })
          .catch("Error; " + reject);
      });
    } catch (err) {
      throw new TypeError(err);
    }
  }
}

module.exports = randomimage;

// Test
