const {Router}  = require('express')
const  {addCountry,updateCountry,deleteCountry,getCountries} = require('../controllers/countryController')
const router = Router()


router.post('/country/add',addCountry)
router.put('/country/update/:id',updateCountry)
router.get('/country/get/',getCountries)
router.delete('/country/delete/:id',deleteCountry)


module.exports = router