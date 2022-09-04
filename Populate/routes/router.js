const express = require('express');
const router = express.Router();
const model = require('../model/populateModel')


router.get('/', (req, res) => {
    res.send('Bonjour')
})

router.get('/populate', (req, res) => {
    model.find()
    .exec()
    .then(function (reponse) {
        res.json(reponse)
    })

})

router.post('/populate', (req, res) => {
    const doc = new model(req.body)
    doc.save().then(reponsee => reponsee)
    res.send('succes');
})

router.put('/populate/:id', (req, res) => {
    model.updateOne({_id : req.params.id}, req.body)
    .exec()
    .then(data => res.json(data))

    const infos = {
        streetName: "bernard"
    }
    axios.put('http://localhost:3015/populate/id', infos)
})

router.delete('/populate/:id', (req, res) => {
    model.findOneAndDelete({_id : req.params.id})
    .exec()
    .then(data => res.json(data))
    axios.delete('http://localhost:3015/popuate/ID')
})

module.exports = router

// router.get('/authors/:id', (req, res) => {
//     let id = req.params.id
//     let author = authors[id];
//     if(id === ''){
//         res.json('Pas de name valide')
//     }else(
//         res.json({
//             name : `Voici l'auteur ${author.name}`
//         })
//     )
// })

// router.post('/authors', (req, res) => {
//     console.log('[Post] / authors, req.body', req.body)
//     authors.push(req.body.name)
//     res.send('ok');
// })


// router.put('/authors', (req, res) => {

// // })
// module.exports = router