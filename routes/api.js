var when     = require('promised-io/promise').when,
	utils	 = require('../utils'),
	passport = require('passport'),
	express  = require('express'),
	router 	 = express.Router();

/* GET API */
router.get('/postcode/:pcode', function(req, res) {
	if (req.xhr) {
		when(utils.getRestaurants(req.params.pcode))
		.then(function (resp) {
			res.end(resp);
		});
	}
});

//* POST API */
router.post('/login', function (req, res) {
	if (req.xhr) {
		when(utils.loginUser(req))
		.then(function (resp) {
			res.end(resp);
		});
	}
});

module.exports = router;