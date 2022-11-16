// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('desiRestaruant', { title: 'Search Results desiRestaruant' });
// });

// module.exports = router;
var express = require('express'); 
const desiRestaruant_controllers= require('../controllers/desiRestaruant'); 
var router = express.Router(); 
 
/* GET desiRestaruant */ 
router.get('/', desiRestaruant_controllers.desiRestaruant_view_all_Page ); 
router.get('/desiRestaruant/:id', desiRestaruant_controllers.desiRestaruant_detail); 
/* GET detail desiRestaruant page */ 
router.get('/detail', desiRestaruant_controllers.desiRestaruant_view_one_Page); 
/* GET create desiRestaruant page */ 
router.get('/create', desiRestaruant_controllers.desiRestaruant_create_Page); 
/* GET create update page */ 
router.get('/update', desiRestaruant_controllers.desiRestaruant_update_Page); 
/* GET delete desiRestaruant page */ 
router.get('/delete', desiRestaruant_controllers.desiRestaruant_delete_Page); 
module.exports = router; 