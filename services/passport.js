const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')
const User = mongoose.model('users')

/* NOTE : The callbackURL and O-Auth Route must have relative links otherwise, multiple cookies
          and sessions will be generated; i.e if O-Auth is /auth/google then callbackURL also
          should be relative i.e /auth/google/callback here !

******** Initiate an object of Passport which will use GoogleStrategy for the O-Auth ******** 

*/

passport.serializeUser((user,done) => {
    //user.id is provided by Mongo which is used to differentiate distinct users
    done(null,user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then((user) => done(null,user))
        .catch((err) => console.log(err))
})


passport.use(new GoogleStrategy({
    clientID : keys.GoogleClientId,
    clientSecret : keys.GoogleClientSecret,
    callbackURL : '/auth/google/callback',
    proxy : true
    },  
        /* Receives a callback with accessToken, profile Information and all */
        (accessToken, refreshToken, profile, done) => {

            User.findOne({ googleId : profile.id})
                .then((existingUser) => {
                    if(existingUser){
                        // We already have this user, he/she is Signing In.
                        // This done() tells passport, we are done and complete.
                        done(null,existingUser); 
                    }else{
                        // New User trying to Sign Up !
                        new User({ googleId : profile.id, Name : profile.displayName }).save()
                            .then((user) => {
                                done(null,user)
                            })
                    }
                })
                .catch(err => console.log("Error at persisting user into database", err))
            
            /* save() is done to persist the model into database */
        }
    )
)