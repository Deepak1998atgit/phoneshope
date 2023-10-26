const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  SrNo: String,
  ProductName: String,
  Image: String,
  Amount: Number,
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;