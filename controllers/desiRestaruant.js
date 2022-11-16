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
exports.desiRestaruant_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await desiRestaruant.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
exports.desiRestaruant_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await desiRestaruant.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle desiRestaruant update form on PUT. 
exports.desiRestaruant_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await desiRestaruant.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.desiRestaruantRating)  
               toUpdate.desiRestaruantRating = req.body.desiRestaruantRating; 
        if(req.body.desiRestaruantCost) toUpdate.desiRestaruantCost = req.body.desiRestaruantCost; 
        if(req.body.desiRestaruantLocation) toUpdate.desiRestaruantLocation = req.body.desiRestaruantLocation; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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

// Handle a show one view with id specified by query 
exports.desiRestaruant_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await desiRestaruant.findById( req.query.id) 
        res.render('desiRestaruantdetail',  
{ title: 'desiRestaruant Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a desiRestaruant. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.desiRestaruant_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('desiRestaruantcreate', { title: 'desiRestaruant Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 