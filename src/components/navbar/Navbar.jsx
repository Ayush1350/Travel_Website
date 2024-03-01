import { useState, useEffect } from 'react';
import './Navbar.css';
import { MenuItems } from '../menuItems/MenuItems';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div>
        <nav className={`NavbarItems ${darkMode ? 'dark-mode' : ''}`}>
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
            {/* <button className="desktop-btn">Sign Up</button>
            <button className="nav-links-mobile">Sign Up</button> */}
          </ul>

          <button className="toggle-btn" onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
