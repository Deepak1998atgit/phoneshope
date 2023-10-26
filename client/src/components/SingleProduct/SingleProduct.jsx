import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setProductDetail } from '../../Redux/ProductDetailSlice'
import Navbar from '../Navbar/Navbar'
import './SingleProduct.css'

export default function SingleProduct() {
  const navigate = useNavigate();
  const fetchData = useSelector(setProductDetail);
  const handleAddToCart = async () => {
    const datas = JSON.parse(localStorage.getItem("productDetail"));
    await axios.post('http://localhost:3000/addTocart', datas)
    .then(navigate('/cart'))

  };
  return (
    <>
      <Navbar />
      <div className="product-card">
        <div className="product-image">
          <img src={fetchData.payload.productDetail.Image} alt={fetchData.payload.productDetail.ProductName} />
        </div>
        <div className="product-details">
          <h2 className="product-title">{fetchData.payload.productDetail.ProductName}</h2>
          <p className="product-price">₹{fetchData.payload.productDetail.Amount}</p>
        </div>
        <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
      </div>
    </>
  )
}
