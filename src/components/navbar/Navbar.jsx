import { useState } from 'react';
import './Navbar.css';
import { MenuItems } from '../menuItems/MenuItems';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <div>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">ExploreEra</h1>

          <div className="menu-icons" onClick={handleMenuClick}>
            <i className={menuActive ? 'fa-regular fa-circle-xmark' : 'fa-solid fa-bars'}></i>
          </div>

          <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
            {MenuItems.map((item, index) => (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            ))}
            <button  className="desktop-btn">Sign Up</button>
            <button  className="nav-links-mobile">Sign Upp</button>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
