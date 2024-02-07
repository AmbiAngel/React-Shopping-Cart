import './Navbar.css'
import {Link} from "react-router-dom"

export default function NavBar() {


  return (
    <div id="nav-bar">
        <ul>
            <li><Link to={'home'}>Home</Link></li>
            <li><Link to={'shopping'}>Store</Link></li>
            <li className='cart'><a href="">Cart: <span className='num-of-items'></span></a></li>
        </ul>
    </div>
  );
}