const express = require("express");
const app = express();
const port = 8004;
const axios = require("axios");

app.get("/", (req, res) => {
  res.send("bonjour ici Pokemon");
});

app.get("/pokemon/:limit/:offset", (req, res) => {
  let offset = req.params.offset;
  let limit = req.params.limit;

  axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((reponse) => {
      let result = reponse.data;
      res.json({
        allPokemon: result,
      });
    });
});


app.get("/pokemon/:id", (req, res) => {
    let id = req.params.id
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((reponse) => {
        let result = reponse.data;
        res.json({
            onePokemon : result
        })
    })
})


app.listen(port, () => {
  console.log("Serveur started on port", port);
});
