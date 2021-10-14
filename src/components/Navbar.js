import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/conversations"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Conversations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Search"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Search
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <NavLink exact to="/" className="nav-logo">
            Connect
            <i class="fas fa-link"></i>
          </NavLink>
          <li className="nav-item">
            <NavLink
              exact
              to="/profile"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Profile
            </NavLink>
          </li>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
