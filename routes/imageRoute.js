const { Router } = require('express')
const router = Router()
const {add} = require('../controllers/fileController')

const uploadImage = require('../middlewars/uploadImage')

router.post('/image/upload',uploadImage.single('image'),add)



module.exports = router