const multer = require('multer')

const storage = multer.diskStorage({
    destination:function (req,file,cb) {
            cb(null,'./uploads/image')
    },
    filename:function (req,file,cb) {
        cb(null,Date.now() + file.originalname)
    }
})

const fileFilter = function(req,file,cb) {
    if(file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
        cb(null,true)
    }
    else {
        cb(null,false)
    }
}
module.exports = multer({
    storage,
    fileFilter
})