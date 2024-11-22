const {model} = require("mongoose");

const {PositionSchema} = require("../schemas/positionSchema.js");

const PositionModels = new model ("position",PositionSchema);

module.exports = {PositionModels};
