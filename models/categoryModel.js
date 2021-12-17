const mongoose = require('mongoose')


const categorySchema = new mongoose.Schema({
    category:{
        type:String,
        required:true,
        unique:true,
        dropDups: true
    }
}, {timestamps: true})


module.exports = mongoose.model('Category',categorySchema)