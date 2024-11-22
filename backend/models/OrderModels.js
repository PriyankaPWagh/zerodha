// const { model } = require("mongoose");

// const { OrdersSchema } = require("../schemas/OrderSchema");

// const OrdersModel = new model("order", OrdersSchema);

// module.exports = { OrdersModel };

const mongoose = require("mongoose");
const { OrdersSchema } = require("../schemas/OrderSchema");

const OrdersModel = mongoose.model("Order", OrdersSchema); // Use mongoose.model

module.exports = { OrdersModel };