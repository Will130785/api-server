const User = require('../../models/zeus/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const key = require('../../config/zeus/keys').secret
const sendMail = require('../../config/zeus/nodemailer')

// REGISTER USER
module.exports.register = async (req, res) => {
  console.log('hitting the register route')
  // Get data from req
  const data = await req.body
  try {
    if (data.password !== data.confirmPassword) {
      return res.status(400).json({
        msg: 'Passwords do not match'
      })
    } else {
      User.findOne({
        username: data.username
      })
        .then(user => {
          if (user) {
            return res.status(400).json({
              msg: 'Username is already taken'
            })
          } else {
            // Data is valid and we can add the user
            const newUser = new User(data)
            // Hash password
            try {
              bcrypt.genSalt(10, (err, salt) => {
                if (!err) {
                  bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (!err) {
                      newUser.password = hash
                      newUser.save().then(user => {
                        // Email registration confirmation to user
                        sendMail(user.email, 'register')
                        return res.status(201).json({
                          success: true,
                          msg: 'User is now registered'
                        })
                      })
                    } else {
                      throw err
                    }
                  })
                } else {
                  console.log(err)
                }
              })
            } catch (err) {
              console.log(err)
            }
          }
        })
    }
  } catch (err) {
    console.log(err)
  }
}

// LOGIN USER
module.exports.login = async (req, res) => {
  // Get data from req
  const data = await req.body
  try {
    User.findOne({ username: data.username }).then(user => {
      if (!user) {
        return res.status(404).json({
          success: false,
          msg: 'Username not found'
        })
      } else {
        // If there is a user we will compare the password
        bcrypt.compare(data.password, user.password).then(isMatch => {
          if (isMatch) {
            // Users password is correct and we send the web token
            const payload = {
              _id: user._id,
              username: user.username
            }
            jwt.sign(payload, key, {
              expiresIn: 604800
            }, (err, token) => {
              if (!err) {
                res.status(200).json({
                  success: true,
                  user: user,
                  token: `Bearer ${token}`,
                  msg: 'You are now logged in'
                })
              } else {
                console.log(err)
              }
            })
          } else {
            console.log('Incorrect password')
            return res.status(404).json({
              success: false,
              msg: 'Incorrect password'
            })
          }
        })
      }
    })
  } catch (err) {
    console.log(err)
  }
}
