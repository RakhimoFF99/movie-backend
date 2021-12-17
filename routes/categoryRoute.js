const {Router}  = require('express')
const {addCategory,getCategories,updateCategory,deleteCategory} = require('../controllers/categoryController')
const router = Router()


router.post('/category/add',addCategory)
router.put('/category/update/:id',updateCategory)
router.get('/category/get/',getCategories)
router.delete('/category/delete/:id',deleteCategory)


module.exports = router