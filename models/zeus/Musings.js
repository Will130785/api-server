const mongoose = require('mongoose')

const musingsSchema = new mongoose.Schema({
  title: String,
  date: String,
  formattedDate: String,
  image: String,
  shortArticle: String,
  article: String,
  postStatus: String
})

const db = mongoose.createConnection(
  process.env.DB_ZEUS,
  {
    autoIndex: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  function (err) {
    if (err) {
      console.log(`${err} ${process.env.DB_ZEUS}`)
    } else {
      console.log(`connected to ${process.env.DB_ZEUS}`)
    }
  }
)

module.exports = db.model('Musing', musingsSchema)
