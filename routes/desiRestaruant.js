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

//A little function to check if we have an authorized user and continue on or
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
/* GET desiRestaruant */ 
router.get('/', desiRestaruant_controllers.desiRestaruant_view_all_Page ); 
router.get('/desiRestaruant/:id', desiRestaruant_controllers.desiRestaruant_detail); 
/* GET detail desiRestaruant page */ 
router.get('/detail',secured, desiRestaruant_controllers.desiRestaruant_view_one_Page); 
/* GET create desiRestaruant page */ 
router.get('/create',secured, desiRestaruant_controllers.desiRestaruant_create_Page); 
/* GET create update page */ 
router.get('/update',secured, desiRestaruant_controllers.desiRestaruant_update_Page); 
/* GET delete desiRestaruant page */ 
router.get('/delete',secured, desiRestaruant_controllers.desiRestaruant_delete_Page); 
module.exports = router; 