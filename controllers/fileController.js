const FileModel = require('../models/fileModel')


exports.add = async (req,res) => {
   
    res.send(req.file)
    try {
        
    }
    catch(e){
        res.status(400).json({
            success:false,
            error:e                     
        })
    }
}

