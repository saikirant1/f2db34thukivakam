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
exports.desiRestaruant_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new desiRestaruant(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"desiRestaruant_type":"goat", "cost":12, "size":"large"} 
    document.desiRestaruantRating = req.body.desiRestaruantRating; 
    document.desiRestaruantCost = req.body.desiRestaruantCost; 
    document.desiRestaruantLocation = req.body.desiRestaruantLocation; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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