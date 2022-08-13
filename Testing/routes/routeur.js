const express = require('express');
const router = express.Router();
const api = require('../data.json')

router.get('/onepiece', (req, res) => {
    res.json(api)
})

router.get('/onepiece/:id', (req, res) => {
        let perso = req.params.id
        api.map((pers) => {
            if(perso === pers.firstName){
                res.json({
                  pers
                })
            }
        })       
})

module.exports = router