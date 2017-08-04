  // <!-- require path -->

var path = require("path");

  // <!-- export routes -->

module.exports = function(app) {

	// <!-- survey -->
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	// <!-- send to homepage if there is no route -->
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};