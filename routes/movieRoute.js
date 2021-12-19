const {Router}  = require('express')
const {addMovie,getMovies} = require('../controllers/movieController')
const router = Router()


router.post('/movie/add',addMovie)
router.put('/movie/update/:id',)
router.get('/movie/getByCategory/:id',)
router.get('/movie/all/',getMovies)
router.get('/movie/get/:id',)
router.delete('/movie/delete/:id')


module.exports = router