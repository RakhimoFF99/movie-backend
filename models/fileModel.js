const mongoose = require('mongoose')

const fileSchema = mongoose.Schema({
    file:{
        type:String,
        required:true
    }
})