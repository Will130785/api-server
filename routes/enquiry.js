const router = require('express').Router()
const ctrl = require('../controllers/enquiry/index')

router.post('/', ctrl.getEnquiry)

module.exports = router
