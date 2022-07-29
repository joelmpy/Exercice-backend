const express = require("express");
const app = express();
const port = 8002;
const axios = require("axios");

app.get("/country/:countryName/capital", (req, res) => {
  let country = req.params.countryName;
  let capitalCity = "";
  let continent = "";

  switch (country) {
    case "france":
      capitalCity = "Paris";
      continent = "Europe";
      break;

    case "spain":
      capitalCity = "Madrid";
      continent = "Europe";
      break;

    case "argentina":
      capitalCity = "Buenos Aires";
      continent = "America";
      break;

    default:
      capitalCity = "not found";
      continent = "none";
      break;
  }

  res.json({
    capital: capitalCity,
    continent: continent,
  });
});

app.get("/film", (req, res) => {
  axios.get("https://thronesapi.com/api/v2/Characters").then((reponse) => {
    let movieData = reponse.data.map((movie) => {
      return movie.title;
    });
    // console.log(movieData, "bjr");
    let name = req.params.pepole;
    res.json({
      name: `hello le nom du film ${movieData}`,
    });
  });
});

app.listen(port, () => {
  console.log("Serveur started on port", port);
});
