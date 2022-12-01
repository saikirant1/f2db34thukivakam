const { Double } = require("mongodb")
const mongoose = require("mongoose")
const desiRestaruantSchema = mongoose.Schema({
    desiRestaruantRating: {
        type: Number,
        required: true,
        min: 0,
        max: 1506
    },
    desiRestaruantCost: {
        type: Number,
        required: true,
        min: 0,
        max: 1500
    },
    desiRestaruantLocation: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("desiRestaruant", desiRestaruantSchema)