const express = require('express');
const app = express()

const verifyUser = (req, res, next) => {
    if(!req.user){
        res.status(401).send('Unauthorized');
    }

    next()
}

module.exports = {
    verifyUser
}