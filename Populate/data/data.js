const mongoose = require('mongoose')
const populateModel = require('../model/populateModel')
mongoose.connect('mongodb://localhost:27017/populate')

populateModel.insertMany({
    streetName : 'Joel',
    streetNumber : '20',
    postCode : "Centre",
    city : 'Paris'
})