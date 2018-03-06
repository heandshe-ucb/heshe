// require passport dependencies
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');

// require google+ api keys
var keys = require('./keys');

// Tell passport to use google strategy
passport.use(new GoogleStrategy({
    // options for strategy
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, function(accessToken, refreshToken, profile, done) {
    // Passport callback function
    console.log('Passport callback function has fired');
    console.log('accessToken : ', accessToken);
    console.log(profile);
}))


// Stephens code:
// // require passport
// var passport = require('passport');
// var GoogleStrategy = require('passport-google-oauth20');
// // require gogle+ api keys
// var keys = require('./keys');
// // require sequelize model for database
// var User = require('../models/user-model.js');

// passport .serializeUser(function(user, done) {
//     done(null, user.id);
// });

// passport .derializeUser(function(id, done) {
//     done(null, user.id);
// });

// // tell passport to use google strategy
// passport.use(new GoogleStrategy({
//         // options for strategy
//         callbackURL: '/auth/google/redirect',
//         clientID: keys.google.clientID,
//         clientSecret: keys.google.clientSecret
//     },(accessToken, refreshToken, profile, done) => {
//         // passport callback function
//         console.log('passport callback function has fired');
//         console.log(profile);
//         User.findOne({
//             where :{
//                 googleid: profile.id
//             }
//         }).then(function(currentUser){
//             if (currentUser) {
//                 // Check to see if already a user
//                 console.log("--------------------");
//                 console.log("Current user is " + currentUser);
//                 console.log("--------------------");
//                 done(null, currentUser);
//             } else {
//                 // Save into our database a new user object
//                 console.log("--------------------");
//                 console.log("CREATING A NEW USER");
//                 console.log("--------------------");
//                 User.create({
//                     username: profile.displayName,
//                     googleid: profile.id
//                 }).then(function(newUser) {
//                     console.log(newUser);
//                     console.log("--------------------");
//                     console.log("New user created: " + newUser);
//                     console.log("--------------------");
//                     done(null, newUser);

//                 })
//             }
//         });
//     })
// )

