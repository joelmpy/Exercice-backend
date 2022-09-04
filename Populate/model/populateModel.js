const mongoose = require('mongoose')

const populateSchema = new mongoose.Schema({
    streetName : String,
    streetNumber : String,
    postCode : String,
    city : String
}) 

const populate = mongoose.model('Populate', populateSchema)

const addPopulate = populate

module.exports = addPopulate