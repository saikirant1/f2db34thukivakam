var desiRestaruant = require('../models/desiRestaruant'); 
 
// List of all desiRestaruant 
// List of all desiRestaruant
exports.desiRestaruant_list = async function(req, res) { 
    try{ 
        thedesiRestaruant = await desiRestaruant.find(); 
        res.send(thedesiRestaruant); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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

// VIEWS 
// Handle a show all view 
exports.desiRestaruant_view_all_Page = async function(req, res) { 
    try{ 
        thedesiRestaruant = await desiRestaruant.find(); 
        res.render('desiRestaruant', { title: 'desiRestaruant Search Results', results: thedesiRestaruant }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 