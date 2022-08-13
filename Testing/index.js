const express = require('express');
const app = express();
const port = process.env.port || 8008
const appRouter = require('./routes/routeur');

app.get('/', (req, res) => {
    res.send('BONJOUR A TOUS')
})

app.use('/', appRouter)

app.listen(port, err => {
   if (err){
    return console.log("ERROR",  err);
   }
   console.log(`Listening on port ${port}`)
})