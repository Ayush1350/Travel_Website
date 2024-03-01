import { useState, useEffect } from 'react';
import './Navbar.css';
import { ServiceItems } from '../menuItems/ServiceItems';
import { Link } from 'react-router-dom';

function ServiceNavbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);


  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
          <button className="toggle-btn" onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </div>
    </>
  );
}

export default ServiceNavbar;
