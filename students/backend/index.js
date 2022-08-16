const express = require('express');
const app = express();
const port = process.env.port || 8005
const cors = require('cors');
const routeur = require('./routes/routeur');

app.use(cors());
app.use(express.json());


// app.get('/', (req, res) => {
//     res.send('Bonjour a tous ici, Home')
// })

app.use('/', routeur)

app.listen(port, err => {
    if(err){
        return console.log('ERROR', err)
    }
    console.log(`Listening on port ${port}`)

})