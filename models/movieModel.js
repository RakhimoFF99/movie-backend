const mongoose = require('mongoose')


const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    description:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now,
      
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
     
    }

},{timestamps: true})

module.exports = mongoose.model('Movie',movieSchema)