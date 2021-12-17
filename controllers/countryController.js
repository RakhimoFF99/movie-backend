const CountryModel = require('../models/countryModel')
exports.getCountries =  async (req,res) => {
    try {
    const countries = await CountryModel.find({})
    if(countries) {
        res.status(200).json({
            success:true,
            countries:countries
        })
    }
    }
    catch(e ) {
        res.status(400).json({
            success:false,
            error:e
        })
    }
}

exports.addCountry  = async  (req,res) => {
 try {
     const country = CountryModel(req.body)
     const data = await country.save()
     if(data) {
         res.status(201).json({
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

exports.updateCountry  = async  (req,res) => {
    try {
        const country = await CountryModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        if(country) {
            res.status(200).json({
                success:true,
                data:country
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

   exports.deleteCountry  = async  (req,res) => {
    try {
        const country = await CountryModel.findByIdAndRemove(req.params.id)
        if(country) {
            res.status(200).json({
                success:true
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