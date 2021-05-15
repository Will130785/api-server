const router = require('express').Router()
const ctrl = require('../controllers/enquiry/index')

router.get('/', ctrl.getEnquiry)

module.exports = router
