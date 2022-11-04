var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('desiRestaruant', { title: 'Search Results desiRestaruant' });
});

module.exports = router;
