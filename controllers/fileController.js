const FileModel = require('../models/fileModel')


exports.add = async (req,res) => {
    console.log('download')
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

