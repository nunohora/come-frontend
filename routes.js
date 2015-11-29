const express = require('express'), router = express.Router(), when = require('promised-io/promise').when, utils = require('./utils');
/* GET home page. */
router.get('/', (req, res) => {
    res.render('layout');
});
module.exports = router;