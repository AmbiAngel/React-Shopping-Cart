import './Navbar.css'
import {Link} from "react-router-dom"

export default function NavBar({numOfItems}) {


  return (
    <div className="navbar">
        <ul>
            <li><Link className='nav-text' to={'home'}>Home</Link></li>
            <li><Link className='nav-text' to={'shopping'}>Store</Link></li>
            <li><Link className='nav-text' to={'about'}>About</Link></li>
            <li className='cart cart-items-link'>
              <Link className='nav-text ' to={'cart'}>
                <img className='cart-svg' src="cart-shopping-solid.svg" alt="" />
                <span className='num-of-items'>{numOfItems}</span>
              </Link>
            </li>
        </ul>
    </div>
  );
}