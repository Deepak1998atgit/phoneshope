import React, { lazy, Suspense } from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SingleProduct from './components/SingleProduct/SingleProduct' ;
const Home = lazy(() => import('./components/Home/Home.jsx'));
const Cart=lazy(()=> import('./components/Cart/Cart.jsx'));
const Order=lazy(()=>import('./components/Order/Order.jsx'));






function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<h1>Loading....</h1>} >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<SingleProduct />}  />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order" element={<Order/>} />
            </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App







