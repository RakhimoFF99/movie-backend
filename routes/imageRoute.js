const { Router } = require('express')
const path = require('path')
const router = Router()
const {add} = require('../controllers/fileController')

const uploadImage = require('../middlewars/uploadImage')

router.post('/image/upload',uploadImage.single('image'),add)
router.get('/image/get/:name',(req,res) => {
    res.sendFile(path.resolve(__dirname,'../','uploads','image',req.params.name))
})



module.exports = router