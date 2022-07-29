const express = require('express');
const app = express();
const port = 8003;

app.get('/', (req, res) => {
    res.send('Bonjour a tous ici Externals')
})

app.listen(port, () => {
    console.log('Serveur started on port' , port)
})