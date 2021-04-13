const Music = require('../../models/zeus/Music')
const { DateTime } = require('luxon')

// GET ALL MUSIC ARTICLES
module.exports.getAllMusic = async (req, res) => {
  try {
    Music.find({}, (err, allMusic) => {
      if (!err) {
        console.log(allMusic)
        res.send(allMusic)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// GET SINGLE ARTICLE
module.exports.getMusic = async (req, res) => {
  // Get id from req
  const id = await req.params.id
  try {
    Music.findOne(id, (err, musicArticle) => {
      if (!err) {
        console.log(musicArticle)
        res.send(musicArticle)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// CREATE NEW MUSIC ARTICLE
module.exports.createNewMusic = async (req, res) => {
  // Get data from req
  const data = await req.body
  // Format date
  const dt = DateTime.fromISO(data.date)
  data.formattedDate = dt.toLocaleString({ locale: 'en-gb' })
  try {
    Music.create(data, (err, newMusic) => {
      if (!err) {
        console.log(newMusic)
        res.send(newMusic)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// EDIT MUSIC ARTICLE
module.exports.updateMusic = async (req, res) => {
  // Get data
  const data = await req.body
  // Format date
  const dt = DateTime.fromISO(data.date)
  data.formattedDate = dt.toLocaleString({ locale: 'en-gb' })
  // Get ID
  const id = await req.params.id
  try {
    Music.findByIdAndUpdate(id, data, { new: true }, (err, updatedMusic) => {
      if (!err) {
        console.log(updatedMusic)
        res.send(updatedMusic)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

// DELETE MUSIC ARTICLE
module.exports.deleteMusic = async (req, res) => {
  // Get id
  const id = await req.params.id
  try {
    Music.findByIdAndDelete(id, (err, deletedMusic) => {
      if (!err) {
        console.log(deletedMusic)
        res.send(deletedMusic)
      } else {
        console.log(err)
      }
    })
  } catch (err) {
    console.log(err)
  }
}
