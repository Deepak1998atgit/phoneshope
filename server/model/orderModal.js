const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    products: [
      {
        SrNo: String,
        ProductName: String,
        Image: String,
        Amount: Number,
      },
    ],
  });
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;