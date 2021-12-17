const { Router } = require('express')
const router = Router()
const {add} = require('../controllers/fileController')

const uploadVideo = require('../middlewars/uploadVideo')
 
router.post('/video/upload',uploadVideo.single('video'),add)




module.exports = router