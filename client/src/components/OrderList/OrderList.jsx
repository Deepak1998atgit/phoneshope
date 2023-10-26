import React, { useState, useEffect } from 'react';
import './OrderList.css'
import axios from 'axios'


export default function OrderList() {
  const [order, setOrder] = useState([]);



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await axios.get('http://localhost:3000/orders')
          .then((response) => {
            setOrder(response.data.userOrder[0].products);
          })

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      
      {order ? (
        <div className="product-lists">
          {order.map((product, index) => (
            <div className="product-cards" key={index}>
              <img className="product-images" src={product.Image} alt={product.ProductName} />
              <div className="product-details">
                <h2 className="product-title">{product.ProductName}</h2>
                <p className="product-price">₹{product.Amount}</p>
              </div>
            </div>
          ))}
        
        </div>
      ) : (
        <p>Loading order data...</p>
      )}
    </div>
  )
}

