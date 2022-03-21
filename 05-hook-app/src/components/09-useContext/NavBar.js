import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav>
      <div>
        <ul className="nav">
          <li className="nav-item">
            <NavLink activeclassname='active' className="nav-link active" aria-current="page" to="*">useContext</NavLink>
          </li>


          <li className="nav-item">
            <NavLink activeclassname='active' className="nav-link active" aria-current="page" to="./">useContext</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeclassname='active' className="nav-link" to="./login">login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeclassname='active' className="nav-link" to="./about">about</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
