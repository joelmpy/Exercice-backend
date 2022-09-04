const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 8015
const session = require('express-session')
const passport = require('./config/passport')
const routeur = require('./routes/router');
const routeLogin = require('./routes/login')
const mongoose = require('mongoose');
const UserModel = require('./model/user.model')

mongoose.connect('mongodb://localhost:27017/populate')

const user = new UserModel({username:"Jojo", password:"123"})
user.save()

app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'MyAwesomeSecret', // string permettant de "signer" nos sessions
    resave: true, // nous permet de garder notre session toujours a jour
    saveUninitialized: false // nous permet de sauvegarder notre session
  }))
app.use(passport.initialize())
app.use(passport.session())
app.use('/', routeur);
app.use('/login', routeLogin)


app.listen(port, err => {
    if(err){
        return console.log('Error', err)
    }
    console.log(`Listen my port ${port}`)
})