var desiRestaruant = require('../models/desiRestaruant'); 
 
// List of all desiRestaruants 
exports.desiRestaruant_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: desiRestaruant list'); 
}; 
 
// for a specific desiRestaruant. 
exports.desiRestaruant_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: desiRestaruant detail: ' + req.params.id); 
}; 
 
// Handle desiRestaruant create on POST. 
exports.desiRestaruant_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: desiRestaruant create POST'); 
}; 
 
// Handle desiRestaruant delete form on DELETE. 
exports.desiRestaruant_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: desiRestaruant delete DELETE ' + req.params.id); 
}; 
 
// Handle desiRestaruant update form on PUT. 
exports.desiRestaruant_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: desiRestaruant update PUT' + req.params.id); 
}; 