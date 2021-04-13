const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../../models/zeus/User')
const key = require('./keys').secret

// Configure passport with JWT strategy
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = key

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwtPayload, done) => {
      User.findById(jwtPayload._id)
        .then(user => {
          if (user) {
            return done(null, user)
          } else {
            return done(null, false)
          }
        })
        .catch(err => {
          console.log(err)
        })
    })
  )
}
