// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
