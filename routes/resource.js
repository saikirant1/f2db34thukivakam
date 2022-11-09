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
router.post('/desiRestaruants', desiRestaruant_controller.desiRestaruant_create_post); 
 
// DELETE request to delete desiRestaruant. 
router.delete('/desiRestaruants/:id', desiRestaruant_controller.desiRestaruant_delete); 
 
// PUT request to update desiRestaruant. 
router.put('/desiRestaruants/:id', desiRestaruant_controller.desiRestaruant_update_put); 
 
// GET request for one desiRestaruant. 
router.get('/desiRestaruants/:id', desiRestaruant_controller.desiRestaruant_detail); 
 
// GET request for list of all desiRestaruant items. 
router.get('/desiRestaruants', desiRestaruant_controller.desiRestaruant_list); 
 
module.exports = router; 