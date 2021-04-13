const router = require('express').Router()
const ctrl = require('../controllers')
const passport = require('passport')

router.get('/', (req, res) => console.log('test'))

// GET ROUTES
router.get('/music', passport.authenticate('jwt', { session: false }), ctrl.zeusControllers.music.getAllMusic)
router.get('/musings', passport.authenticate('jwt', { session: false }), ctrl.zeusControllers.musings.getAllMusings)
router.get('/scripts', passport.authenticate('jwt', { session: false }), ctrl.zeusControllers.scripts.getAllScripts)
router.get('/writing', passport.authenticate('jwt', { session: false }), ctrl.zeusControllers.writing.getAllWriting)
router.get('/music/:id', passport.authenticate('jwt', { session: false }), ctrl.zeusControllers.music.getMusic)

// POST ROUTES
router.post('/music', passport.authenticate('jwt', { session: false }), ctrl.zeusControllers.music.createNewMusic)
router.post('/musings', passport.authenticate('jwt', { session: false }), ctrl.zeusControllers.musings.createMusing)
router.post('/scripts', passport.authenticate('jwt', { session: false }), ctrl.zeusControllers.scripts.createNewScript)
router.post('/writing', passport.authenticate('jwt', { session: false }), ctrl.zeusControllers.writing.createNewWriting)

// PUT ROUTES
router.put('/music/:id', passport.authenticate('jwt', { session: false }), ctrl.zeusControllers.music.updateMusic)
router.put('/musings/:id', passport.authenticate('jwt', { session: false }), ctrl.zeusControllers.musings.updateMusing)
router.put('/scripts/:id', passport.authenticate('jwt', { session: false }), ctrl.zeusControllers.scripts.updateScript)
router.put('/writing/:id', passport.authenticate('jwt', { session: false }), ctrl.zeusControllers.writing.updateWriting)

// DELETE ROUTES
router.delete('/music/:id', passport.authenticate('jwt', { session: false }), ctrl.zeusControllers.music.deleteMusic)
router.delete('/musings/:id', passport.authenticate('jwt', { session: false }), ctrl.zeusControllers.musings.deleteMusing)
router.delete('/scripts/:id', passport.authenticate('jwt', { session: false }), ctrl.zeusControllers.scripts.deleteScript)
router.delete('/writing/:id', passport.authenticate('jwt', { session: false }), ctrl.zeusControllers.writing.deleteWriting)

// AUTH ROUTES
router.post('/register', ctrl.zeusControllers.auth.register)
router.post('/login', ctrl.zeusControllers.auth.login)

// WEBSITE GET ROUTES
router.get('/music-articles', ctrl.zeusControllers.web.getMusicArticles)
router.get('/musing-articles', ctrl.zeusControllers.web.getMusingArticles)
router.get('/script-articles', ctrl.zeusControllers.web.getScriptArticles)
router.get('/writing-articles', ctrl.zeusControllers.web.getWritingArticles)
router.get('/music-articles/:id', ctrl.zeusControllers.web.getMusicArticle)
router.get('/musing-articles/:id', ctrl.zeusControllers.web.getMusingArticle)
router.get('/script-articles/:id', ctrl.zeusControllers.web.getScriptArticle)
router.get('/writing-articles/:id', ctrl.zeusControllers.web.getWritingArticle)

// WEBSITE POST ROUTES
router.post('/contact-form', ctrl.zeusControllers.web.formSubmission)

// For testing purposes only
// const Music = require('../models/zeus/Music')
// const Musing = require('../models/zeus/Musings')
// const Script = require('../models/zeus/Scripts')
// const Writing = require('../models/zeus/Writing')
// const User = require('../models/zeus/User')

// router.get('/', (req, res) => {
//   console.log('You are coming through to the zeus routes')
//   Music.find({}, (err, results) => {
//     if (!err) {
//       console.log(results)
//     } else {
//       console.log(err)
//     }
//   })
//   Musing.find({}, (err, results) => {
//     if (!err) {
//       console.log(results)
//     } else {
//       console.log(err)
//     }
//   })
//   Script.find({}, (err, results) => {
//     if (!err) {
//       console.log(results)
//     } else {
//       console.log(err)
//     }
//   })
//   Writing.find({}, (err, results) => {
//     if (!err) {
//       console.log(results)
//     } else {
//       console.log(err)
//     }
//   })
//   User.find({}, (err, results) => {
//     if (!err) {
//       console.log(results)
//     } else {
//       console.log(err)
//     }
//   })
// })

module.exports = router
