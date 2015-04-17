//takes the browser's request and lets us send back a page or other information
var commentModel = require('../models/comment');

module.exports = {
	index: function(req, res) {
		var viewModel = commentModel.find(function(err, comments) {
			console.log("In home.js, Request:",req.user);
			//req.user is the user making the request. this will fail without a user
            res.render('index',{"comments":comments,userName: req.user ? req.user.username : ''});
        });
	}
};