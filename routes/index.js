const router = require('express').Router()

// Zeus
// router.use('/', (req, res) => {
//   console.log('TEst')
// })
router.use('/zeus', require('./zeus'))
router.use('/enquiry', require('./enquiry'))

module.exports = router
