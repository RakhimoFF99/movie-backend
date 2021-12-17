const mongoose = require('mongoose')


const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    description:{
        type:String,required:true
    },
    country:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    videoPath:{
        type:String,
        required:true
    },
    mainImagePath:{
        type:String,
        required:true
    },
    imagesPath:{
        type:Array,
        required:true
    }

},{timestamps: true})

module.exports = mongoose.model('Movie',movieSchema)