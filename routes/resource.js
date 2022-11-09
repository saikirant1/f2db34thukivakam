var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var desiRestaruant_controller = require('../controllers/desiRestaruant'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// desiRestaruant ROUTES /// 
 
// POST request for creating a desiRestaruant.  
router.post('/desiRestaruant', desiRestaruant_controller.desiRestaruant_create_post); 
 
// DELETE request to delete desiRestaruant. 
router.delete('/desiRestaruant/:id', desiRestaruant_controller.desiRestaruant_delete); 
 
// PUT request to update desiRestaruant. 
router.put('/desiRestaruant/:id', desiRestaruant_controller.desiRestaruant_update_put); 
 
// GET request for one desiRestaruant. 
router.get('/desiRestaruant/:id', desiRestaruant_controller.desiRestaruant_detail); 
 
// GET request for list of all desiRestaruant items. 
router.get('/desiRestaruant', desiRestaruant_controller.desiRestaruant_list); 
 
module.exports = router;
 