// // New user model
// // dependencies
// var Sequelize = require('sequelize');
// // refrence to our connection to the database
// var sequelize = require('../config/connection.js');

// // Create a new model for user 

// var User = sequelize.define("user", {
//     username: {
//         type: Sequelize.STRING
//     },
//     googleid: {
//         type: Sequelize.STRING
//     }
// }, {   
//     timestamps: false
// });

// // sync to the database
// User.sync();

// // export the model to be used in other files
// module.exports = User;