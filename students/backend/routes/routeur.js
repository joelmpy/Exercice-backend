const express = require('express');
const Routeur = express.Router();
const api = require('../data.json')

Routeur.get('/students', (req, res) => {
    res.json(api)
})

Routeur.get('/students/:id', (req, res) => {
    let student = req.params.id
    api.map((perso) => {
        if(student == perso.id){
            res.json(perso)
        }
    })
})

Routeur.get('/students/gender/:gender', (req, res) => {
    let genderID = req.params.gender
    const gender = api.filter(perso => perso.gender == genderID)
    res.json(gender)
})


Routeur.post('/students', (req, res) => {
let user = req.body
api.push(user)
console.log(api)
return res.send('User has been added successfully');
})


module.exports = Routeur