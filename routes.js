var express = require('express'),
	router  = express.Router(),
	when    = require('promised-io/promise').when,
	utils	= require('./utils');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('layout');
});

/* GET API */
router.get('/api/postcode/:pcode', function(req, res) {
	if (req.xhr) {
		when(utils.getRestaurants(req.params.pcode))
		.then(function (resp) {
			res.end(resp);
		});
	}
});

//* POST API */
router.post('/api/login', function (req, res) {
	if (req.xhr) {
		when(utils.loginUser(req.body.email, req.body.password))
		.then(function (resp) {
			res.end(resp);
		});
	}
});

module.exports = router;