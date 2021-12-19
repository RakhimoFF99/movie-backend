const MovieModel = require('../models/movieModel')
exports.getMovies =  async (req,res) => {
    console.log('request')
    try {
        const movies = await MovieModel.find()
        if(movies) {
            res.status(200).json({
                success:true,
                movies
            })
        }
    }
    catch(e ) {
        console.log(e)
    }
}

exports.getMovieById =  async (req,res) => {
    try {
        
    }
    catch(e ) {
        console.log(e)
    }
}


exports.addMovie  = async  (req,res) => {
 try {
     const response = await MovieModel(req.body)
     const data = await response.save()
     if(data) {
         res.status(200).json({ 
             success:true,
             data:data
         })
     }
 }
 catch(e) {
    res.status(400).json({
        success:false,
        error:e
    })
 }
} 

exports.updateMovie = async  (req,res) => {
    try {}
    catch(e) {
        console.log(e)
    }
   }
    
   exports.deleteMovie = async  (req,res) => {
    try {}
    catch(e) {
        console.log(e)
    }
   } 