const { Router } = require('express')
const path = require('path')
const router = Router()
const {add} = require('../controllers/fileController')

const uploadVideo = require('../middlewars/uploadVideo')
 
router.post('/video/upload',uploadVideo.single('video'),add)
router.get('/video/get/:name',(req,res) => {
    res.sendFile(path.resolve(__dirname,'../','uploads','video',req.params.name))
})






module.exports = router