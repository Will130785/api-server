const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  fullName: String,
  picture: String,
  bio: String,
  password: String
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

module.exports = db.model('User', userSchema)
