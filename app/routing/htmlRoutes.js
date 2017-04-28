var express = require('express');
var app = express();
var path = require('path');

module.exports = function(app) {

	console.log('Got HTML routes');

	app.get("/", function(request, response) {
		response.sendFile(path.join(__dirname, "/../public/home.html"));
	});

	app.get("/survey", function(request, response) {
		response.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	app.get("/friends.js", function(request,response){
		response.sendFile(path.join(__dirname, '../public/friends.js'));
	});

};