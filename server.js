// Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')
const { NODE_ENV } = process.env

// Initiate app
const app = express()

// Set env variables
const dotEnvPath = NODE_ENV === 'production' ? '.env' : NODE_ENV && `.${NODE_ENV}.env`

// Set env file path
require('dotenv').config({
  path: dotEnvPath
})

// Set port
const port = process.env.PORT || 3000

// CORS
app.use(cors())

// Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Connect and configure passport
app.use(passport.initialize())
require('./config/zeus/passport')(passport)

// Set router
app.use(require('./routes'))

// Start server
app.listen(port, () => {
  console.log(`
    -----------------------
    Server Started
    PORT: ${process.env.PORT}
    ENV: ${NODE_ENV}
  `)
})
