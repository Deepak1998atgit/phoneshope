const cartModal = require('../model/cartModal.js');
const orderModal=require('../model/orderModal.js');

const addTocart = (req, res) => {                           //function to add products to the cart
  try {
    const newProduct = new cartModal(req.body);
    newProduct.save();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

const cart = async (req, res) => {                          //function to get products from cart
  try {
    const cart =await cartModal.find({});
    res.status(200).json({cart});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

const order=async (req,res)=>{                                 //function to place order
  try{
    const userCart = await cartModal.find();
    const order = new orderModal({ products: userCart  });
    await order.save();
    await cartModal.deleteMany();
  }catch(error){
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


const getOrders=async(req,res)=>{                                //function to get the order details
  try{
     const userOrder = await orderModal.find();
     res.status(200).json({userOrder});
    }catch(error){
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}



module.exports = { addTocart,cart,order,getOrders};