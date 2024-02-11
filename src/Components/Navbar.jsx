import './Navbar.css'
import {Link} from "react-router-dom"

export default function NavBar({numOfItems}) {


  return (
    <div id="nav-bar">
        <ul>
            <li><Link to={'home'}>Home</Link></li>
            <li><Link to={'shopping'}>Store</Link></li>
            <li className='cart'><Link to={'cart'}>Cart: <span className='num-of-items'>{numOfItems}</span></Link></li>
        </ul>
    </div>
  );
}