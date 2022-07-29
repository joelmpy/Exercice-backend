const express = require('express');
const app = express();
const port = 8005
const gameRoute = require('./routes/route')


app.use('/', gameRoute);


app.listen(port, () => {
    console.log("Serveur started on port", port);
  });
  