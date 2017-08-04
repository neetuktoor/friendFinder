// Dependencides
var path = require ("path");
var friendsData= require("../data/friends");

// export routes
module.exports = function(app) {

	app.get("/api/friends", function(req,res) {
		res.json(friendsData);
	});

    app.post("/api/friends", function (req, res){

    	var bestMatch ={
	      name:"",
	      photo:"",
	      friendDifference: 100
    	};

    	var userData = req.body;

    	var userScores = userData.scores;

    	var totalDifference = 0;
	    
	    for(var i = 0; i < friendsData.length; i++) {
	     
      	totalDifference = 0
      	
      	for(var j = 0; j < friendsData[i].scores[j]; j++){
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
	        if(totalDifference <= bestMatch.friendDifference){
	          bestMatch.name = friends[i].name;
	          bestMatch.photo = friends[i].photo;
	          bestMatch.friendDifference = totalDifference;        }
	      	}
   		}
    	friendsData.push(req.body);
        res.json(friendsdata);
    });
}

