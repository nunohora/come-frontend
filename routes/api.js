var when     = require('promised-io/promise').when,
	utils	 = require('../utils'),
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

module.exports = router;