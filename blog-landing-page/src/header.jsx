import React, { useState } from 'react';
import './index.css';

function Header(props) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const dynamicStyles = {
    backgroundColor: props.login ? 'green' : 'red',
    // Add other styles as needed
  };

  return (
    <>
      <header >
        <a className="logo" href="/">LOGO</a>
        <nav className={showMenu ? 'nav__links show' : 'nav__links'}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href={props.link}>Posts</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
        
        <a className="cta" href="#" style={dynamicStyles}> {props.login ? 'Logout' : 'Login'}</a>
        <p className="menu cta" onClick={toggleMenu}>Menu</p>
      </header>
      <div className={`overlay ${showMenu ? 'overlay--active' : ''}`}>
        <a className="close" onClick={toggleMenu}>&times;</a>
        <div className="overlay__content">
          <a href="#">Home</a>
          <a href="#">Posts</a>
          <a href="#">About</a>
        </div>
      </div>
    </>
  );
}

export default Header;
