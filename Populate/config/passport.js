const passport = require('passport');
const LocalStrategy = require('passport-local');
const UserModel = require('../model/user.model');

passport.use(new LocalStrategy(async (username, password, done) => {
    const user = await UserModel.findOne({username : username, password : password}).exec()
    console.log(user)
    if(!user){
        return done(null, false)
    }
    return done (null, user)

}))

passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser(async (id, done) => {
    const user = await UserModel.findById(id)
    done(null, user)
})

module.exports = passport