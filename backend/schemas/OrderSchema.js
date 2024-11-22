const { Schema } = require("mongoose");
const mongoose= require("mongoose");
const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true, // Ensures every order is linked to a user
  },
});

module.exports = { OrdersSchema };