// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('desiRestaruant', { title: 'Search Results desiRestaruant' });
// });

// module.exports = router;
var express = require('express'); 
const desiRestaruant_controlers= require('../controllers/desiRestaruant'); 
var router = express.Router(); 
 
/* GET desiRestaruant */ 
router.get('/', desiRestaruant_controlers.desiRestaruant_view_all_Page ); 
module.exports = router; 