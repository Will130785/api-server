const Musings = require('../../models/zeus/Musings')
const Music = require('../../models/zeus/Music')
const Scripts = require('../../models/zeus/Scripts')
const Writing = require('../../models/zeus/Writing')
const sendMail = require('../../config/zeus/nodemailer')
const { DateTime } = require('luxon')

// GET MUSIC ARTICLES FOR WEBSITE
module.exports.getMusicArticles = async (req, res) => {
  try {
    Music.find({}, (err, allMusic) => {
      if (!err) {
        console.log(allMusic)
        // Create published items array
        const publishedItems = []
        // Loop through results and push only published items to array
        allMusic.forEach(item => {
          if (item.postStatus === 'Live') {
            const dt = DateTime.fromFormat(item.formattedDate, 'D', { locale: 'en-gb' })
            item.date = dt.toLocaleString(DateTime.DATE_FULL)
            publishedItems.push(item)
          }
        })
        res.send(publishedItems)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// GET SINGLE MUSIC ARTICLE FOR WEBSITE
module.exports.getMusicArticle = async (req, res) => {
  // id from req
  const id = req.params.id

  try {
    Music.findById(id, (err, musicArticle) => {
      if (!err) {
        console.log(musicArticle)
        const dt = DateTime.fromFormat(musicArticle.formattedDate, 'D', { locale: 'en-gb' })
        musicArticle.date = dt.toLocaleString(DateTime.DATE_FULL)
        res.send(musicArticle)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// GET MUSING ARTICLES FOR WEBSITE
module.exports.getMusingArticles = async (req, res) => {
  try {
    Musings.find({}, (err, allMusings) => {
      if (!err) {
        console.log(allMusings)
        // Create published items array
        const publishedItems = []
        // Loop through results and push only published items to array
        allMusings.forEach(item => {
          if (item.postStatus === 'Live') {
            const dt = DateTime.fromFormat(item.formattedDate, 'D', { locale: 'en-gb' })
            item.date = dt.toLocaleString(DateTime.DATE_FULL)
            publishedItems.push(item)
          }
        })
        res.send(publishedItems)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// GET SINGLE MUSING ARTICLE FOR WEBSITE
module.exports.getMusingArticle = async (req, res) => {
  // Get id from req
  const id = req.params.id
  try {
    Musings.findById(id, (err, musingArticle) => {
      if (!err) {
        console.log(musingArticle)
        const dt = DateTime.fromFormat(musingArticle.formattedDate, 'D', { locale: 'en-gb' })
        musingArticle.date = dt.toLocaleString(DateTime.DATE_FULL)
        res.send(musingArticle)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// GET SCRIPTS ARTICLES FOR WEBSITE
module.exports.getScriptArticles = async (req, res) => {
  try {
    Scripts.find({}, (err, allScripts) => {
      if (!err) {
        console.log(allScripts)
        // Create published items array
        const publishedItems = []
        // Loop through results and push only published items to array
        allScripts.forEach(item => {
          if (item.postStatus === 'Live') {
            const dt = DateTime.fromFormat(item.formattedDate, 'D', { locale: 'en-gb' })
            item.date = dt.toLocaleString(DateTime.DATE_FULL)
            publishedItems.push(item)
          }
        })
        res.send(publishedItems)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// GET SINGLE SCRIPT ARTICLE FOR WEBSITE
module.exports.getScriptArticle = async (req, res) => {
  // Get id from req
  const id = req.params.id
  try {
    Scripts.findById(id, (err, scriptArticle) => {
      if (!err) {
        console.log(scriptArticle)
        const dt = DateTime.fromFormat(scriptArticle.formattedDate, 'D', { locale: 'en-gb' })
        scriptArticle.date = dt.toLocaleString(DateTime.DATE_FULL)
        res.send(scriptArticle)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// GET WRITING ARTICLES FOR WEBSITE
module.exports.getWritingArticles = async (req, res) => {
  try {
    Writing.find({}, (err, allWriting) => {
      if (!err) {
        console.log(allWriting)
        // Create published items array
        const publishedItems = []
        // Loop through results and push only published items to array
        allWriting.forEach(item => {
          if (item.postStatus === 'Live') {
            const dt = DateTime.fromFormat(item.formattedDate, 'D', { locale: 'en-gb' })
            item.date = dt.toLocaleString(DateTime.DATE_FULL)
            publishedItems.push(item)
          }
        })
        res.send(publishedItems)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// GET SINGLE WRITING ARTICLE FOR WEBSITE
module.exports.getWritingArticle = async (req, res) => {
  // Get id from req
  const id = req.params.id
  try {
    Writing.findById(id, (err, writingArticle) => {
      if (!err) {
        console.log(writingArticle)
        const dt = DateTime.fromFormat(writingArticle.formattedDate, 'D', { locale: 'en-gb' })
        writingArticle.date = dt.toLocaleString(DateTime.DATE_FULL)
        res.send(writingArticle)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// DEAL WITH FORM SUBMISSION
module.exports.formSubmission = async (req, res) => {
  // Get data from req
  const data = req.body
  console.log(data)
  sendMail(data, 'form')
  res.send(data)
}
