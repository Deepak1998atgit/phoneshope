import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {setProductDetail} from '../../Redux/ProductDetailSlice.jsx';
import './ProductLists.css'



export default function ViewButton({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleViewProduct = () => {
    dispatch(setProductDetail(product));
    navigate('/product');
  };
  return (
    <>
      <button className='view-product-btn' onClick={handleViewProduct}>View Product</button>
    </>
  )
}
