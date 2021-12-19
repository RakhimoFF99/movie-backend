const { Router } = require('express')
const path = require('path')
const router = Router()
const {add} = require('../controllers/fileController')

const uploadVideo = require('../middlewars/uploadVideo')
 
router.post('/video/upload',add)






module.exports = router