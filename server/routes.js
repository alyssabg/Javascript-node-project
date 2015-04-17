//pull in our controllers
var home = require('../controllers/home');
var comment = require('../controllers/comment');
var users = require('../controllers/user');
var passport = require('passport');

module.exports.initialize = function(app, router) {
	//handles browser requests for content
	app.get('/', home.index);
	app.get('/comments', comment.index);
	//handles post routes (like a form submission)
	app.post('/comments', comment.create);
	
	app.use('/', router);
	//*****our new routes handle the sign up and sign in views and actions
	app.get('/signup', users.renderSignup);
	app.post('/signup', users.signup);
	app.route('/signin')
		.get(users.renderSignin)
		.post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/signin',
			//*****displays an error message or welcome depending on authentication
			failureFlash: true,
                  successFlash: 'Welcome!'
		}));
	app.get('/signout', users.signout);
};
