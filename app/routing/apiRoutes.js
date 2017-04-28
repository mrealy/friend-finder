var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

module.exports = function(app) {
  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get('/api/friends', function(request, response) {
    fs.readFile('./app/data/friends.json', function(error, data) {
        if(error) {
          console.log(error);
        } else {
          var allFriends = JSON.parse(data).data;
          return response.json(allFriends);
        }
      });
  });
  // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
  app.post('/api/friends', function(request, response) {
    var newFriend = request.body;
    // TODO store new friend in friend storage
    fs.readFile('./app/data/friends.json', function(error, data) {
        if(error) {
          console.log(error);
        } else {
          var arr = JSON.parse(data).data;
          arr.push(newFriend);
          var json = {"data": arr};
          fs.writeFile('./app/data/friends.json', JSON.stringify(json), function(error) {
              if (error) {
                console.log(error);
              } 
          });
        }
    });
    // TODO do some work & show new friend result
    response.redirect('/survey');
  });
}