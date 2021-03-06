var express = require("express");
var bodyParser = require("body-parser");
//var yelpRouter = require("./controllers/yelp.js");

var PORT = process.env.PORT || 3001;

var app = express();
var passportSetup = require('./config/passport-setup');
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/heandshe_controllers");

app.use(routes);

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

//app.use(yelpRouter);


app.listen(PORT, function() {
  console.log("App now listening at http://localhost:" + PORT);
});


