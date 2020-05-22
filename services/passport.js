const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys.js");

/* Load the collection users into a model class named User */
const User = mongoose.model("users");

/* The user here is what pulled out of database (created or saved) below
   done is a callback (error, identifying piece of info)
*/
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

/* Stratgies is supported via the use function
 * We pass a new object google strategy
 * Inside google strategy, we pass configurations and the callback function that will execute after Google sends user information back
  The call back function with 4 param is when we get access to our user information
 */
passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback",
            proxy: true
        },
        (accessToken, refreshToken, profile, done) => {
            /* findOne is an asynchronous operation, so we cant just assign the result to a variable. => we use promise:
              + Add a then statement with a function that will be called after the findOne completes
              _ the arror func arg is whatever was returned by fineOne()
              - If found user, call done, no error
              - Else we found error, but we only want it after the save() is finished => chained on
              */
            User.findOne({ googleId: profile.id }).then(existingUser => {
                if (!existingUser) {
                    /*
                    newUser is the one just saved as we called  new User({googleId: profile.id})
                    */
                    new User({ googleId: profile.id })
                        .save()
                        .then(newUser => done(null, newUser));
                } else {
                    // no error, pass in user found
                    done(null, existingUser);
                }
            });
        }
    )
);
