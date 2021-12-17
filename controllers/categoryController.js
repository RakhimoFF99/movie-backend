const CategoryModel = require('../models/categoryModel')
exports.getCategories =  async (req,res) => {
    try {
    const categories = await CategoryModel.find({})
    if(categories) {
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

exports.addCategory = async  (req,res) => {
 try {
     const category = CategoryModel(req.body)
     const data = await category.save()
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

exports.updateCategory  = async  (req,res) => {
    try {
        const category = await CategoryModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        if(category) {
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

   exports.deleteCategory  = async  (req,res) => {
    try {
        const category = await CategoryModel.findByIdAndRemove(req.params.id)
        if(category) {
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