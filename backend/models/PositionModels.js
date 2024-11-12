const {model} = require("mongoose");

const {PositionSchema} = require("../schemas/PositionSchema.js");

const PositionModels = new model ("position",PositionSchema);

module.exports = {PositionModels};
