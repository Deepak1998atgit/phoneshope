const express = require('express');
const controller=require('../controller/controller.js')
const router = express.Router();
router.post('/addTocart',controller.addTocart);   //route for post the products to cart
router.get('/cart',controller.cart);              //route for get cart products
router.post('/placeOrder',controller.order);      //route for place order 
router.get('/orders',controller.getOrders);       //route for get order detail
module.exports = router;
  