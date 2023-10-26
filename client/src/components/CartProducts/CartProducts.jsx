import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartProducts.css'
import axios from 'axios'

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [isEmpty, setIsempty] = useState(false);
  const reversedProducts = [...products].reverse();
  console.log(products, "osjgdgd");
  const navigate = useNavigate();
  const handlePlaceOrder = async () => {
    try {
      const response = await axios.post('http://localhost:3000/placeOrder')
        .then(navigate('/order'))
        .catch((error) => {
          console.log("error on palce order:", error)
        })
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cart');
        console.log("jjshshh", response.data.cart, "jjshshh");
        setProducts(response.data.cart);
        setIsempty(response.data.cart.length === 0);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      {isEmpty ? (
        <img id="emptycartimage" src='https://plus.unsplash.com/premium_photo-1670462145715-c32d0c91e81b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNob3BwaW5nJTIwY2FydHxlbnwwfHwwfHx8MA%3D%3D' />
      ) : (
        <div className="product-lists">
          {reversedProducts.map((product, index) => (
            <div className="product-cards" key={index}>
              <img className="product-images" src={product.Image} alt={product.ProductName} />
              <div className="product-details">
                <h2 className="product-title">{product.ProductName}</h2>
                <p className="product-price">₹{product.Amount}</p>
              </div>
            </div>
          ))}
          <button id='cart-btn' onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
    </>
  )
}
