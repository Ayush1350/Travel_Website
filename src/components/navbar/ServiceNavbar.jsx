import { useState } from 'react';
import './Navbar.css';
import { ServiceItems } from '../menuItems/ServiceItems';
import { Link } from 'react-router-dom';

function ServiceNavbar() {
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
            {ServiceItems.map((item, index) => (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default ServiceNavbar;
