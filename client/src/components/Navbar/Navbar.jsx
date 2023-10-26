import React,{useState} from 'react'
import './NavbarStyles.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleToggle = () => {
    setClicked(!clicked);
  };
  return (
    <nav>
      <div className='navbar'>
      <a href='#'><svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" class="ccompli1" fill="#17cf97"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#17cf97"></path> </svg></a>
      </div>
      <div>
     
      <ul id='navbar' className={clicked? '#navbar active':'#navbar'}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
        <li><NavLink to="/order">Order</NavLink></li>
      </ul>
     </div>
     <div id='mobile'>
       <i id='bar' className={clicked ? 'fas fa-times':'fas fa-bars'}  onClick={handleToggle}></i>
     </div>
    </nav>
    
  )
}
