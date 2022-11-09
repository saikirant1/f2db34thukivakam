const { Double } = require("mongodb")
const mongoose = require("mongoose") 
const desiRestaruantSchema = mongoose.Schema({ 
    desiRestaruantRating:Number,
    desiRestaruantCost:Number,
    desiRestaruantLocation:String
}) 
 
module.exports = mongoose.model("desiRestaruant", desiRestaruantSchema) 