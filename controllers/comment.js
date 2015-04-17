var fs = require('fs');
var path = require('path');
var Models = require('../models');

module.exports = {
  index: function(req, res) {
    Models.Comment.find(function(err,comments){
      var viewModel = {
        comments: comments
      };
      res.render('comments',viewModel);
    });
  },
  create: function(req, res) {
    var newComment = new Models.Comment(req.body);
	//****saves the username to the comment
    newComment.user = req.user.username;
    newComment.save(function(err, comment) {
      if (err) { throw err; }

      res.redirect('/comments');
    });
  }
};