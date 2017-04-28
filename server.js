var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var port = 8080;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.listen(port, function(error) {
	if (error) {
		console.log(error);
	} else {
		console.log('Listening on port ' + port);
	}
});

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);