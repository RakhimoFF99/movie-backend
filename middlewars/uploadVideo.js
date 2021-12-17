const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination:function (req,file,cb) {
            cb(null,'./uploads/video')
    },
    filename:function (req,file,cb) {
        cb(null,Date.now() + file.originalname)
    }
})

const fileFilter = function(req,file,cb) {
    if(file.mimetype === "video/mp4" ) {
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