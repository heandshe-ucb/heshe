// require passport dependencies
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');

// require google+ api keys
var keys = require('./keys');

// Tell passport to use google strategy
passport.use(new GoogleStrategy({
    // options for strategy
    callbackURL: '',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, function(accessToken, refreshToken, profile, done) {
    // Passport callback function
    console.log('Passport callback function has fired');
    console.log(profile);
}))