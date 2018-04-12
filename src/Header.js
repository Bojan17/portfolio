import React from 'react';
import { NavLink } from 'react-router-dom';

 const Header = () => (
  <header className="header">
    <ul className="header-list">
      <li className="header-listItem">
        <NavLink to="/" className="header-listItem" activeClassName="is-active">
          Home
        </NavLink>
        </li>
      <li className="header-listItem" >
        <NavLink to="/about">
          About
        </NavLink>
      </li>
      <li className="header-listItem">
        <NavLink to="/portfolio">
          Portfolio
        </NavLink>
      </li>
      <li className="header-listItem">
        <NavLink to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
