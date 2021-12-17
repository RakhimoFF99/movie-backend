const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema ({
    country:{
        type:String,
        required:true,
        trim:true
    }
},{timestamps: true})

module.exports = mongoose.model('Country',countrySchema)