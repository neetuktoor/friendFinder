// Dependencides
var express = require ("express");
var bodyParser = require ("body-parser");
var path = require ("path");

//Express setip
var app = express();
var PORT = process.env.PORT || 8080;

//make the CSS folder public
app.use(express.static(path.join(__dirname, "./app/public")));

//set up to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

//Routes
// require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Starts the local server
app.listen(PORT, function(){
  console.log('App listening on PORT ' + PORT);
});


