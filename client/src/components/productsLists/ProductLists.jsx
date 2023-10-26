import React from 'react';
import Products from '../../api/products.json'; // Assuming you have your product data in a JSON file
import './ProductLists.css'
import ViewButton from './ViewButton.jsx';

const ProductLists = () => {
  return (
    <section className="product-list-containers">
      {Products.map((product, key) => (
         <div className="product-card" key={key}>
          <h3 id="product-srno">{product?.SrNo}</h3>
          <h2 id='product-name'>{product?.ProductName}</h2>
          <img src={product?.Image} alt={product?.ProductName} />
          <h2 className='product-amount'>₹{product?.Amount}</h2>
           <ViewButton product={product} />
        </div>
      ))}
    </section>
  );
};

export default ProductLists;

