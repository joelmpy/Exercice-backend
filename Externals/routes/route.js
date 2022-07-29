const express = require("express");
const api = require("../data.json");
const axios = require("axios");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Bonjour a tous ici Externals");
});

router.get("/game-of-thrones/json", (req, res) => {
  res.send(api);
});

router.get("/game-of-thrones/url", (req, res) => {
  axios.get("https://thronesapi.com/api/v2/Characters").then((reponse) => {
    let api = reponse.data.map((game) => {
      return game;
    });
  });

  res.json({
    api: api,
  });
});

module.exports = router