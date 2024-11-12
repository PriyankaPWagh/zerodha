const {model} = require("mongoose");

const {HoldingSchema} = require("../schemas/HoldingSchema")

const HoldingModels = new model("holding", HoldingSchema);

module.exports = {HoldingModels}