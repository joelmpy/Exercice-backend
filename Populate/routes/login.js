const express = require('express')
const route = express.Router()
const passport = require('../config/passport')
const { verifyUser } = require('../middlewares/auth')

route.post('/', passport.authenticate('local'), (req, res, next) => {
    if (!req.user) {
        res.status(401).send('The username password is not correct')
    }
    res.send('Hello ' + req.user.username)
    }
)

route.get('/',verifyUser, (req, res) => {
        res.json('you are connected')
})

route.get("/logout",(req,res)=>{
    req.logout(() => {
        res.json('You are disconnected')

    });
    // res.redirect("/");
});





module.exports = route