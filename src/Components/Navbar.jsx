import './Navbar.css'

export default function NavBar() {


  return (
    <div id="nav-bar">
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Store</a></li>
            <li className='cart'><a href="">Cart: <span className='num-of-items'></span></a></li>
        </ul>
    </div>
  );
}