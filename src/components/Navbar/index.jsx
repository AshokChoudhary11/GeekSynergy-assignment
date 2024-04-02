import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./index.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setIsLoggedIn(true);
      //   setUserData(JSON.parse(storedUserData));
    }
  }, [isLoggedIn]);
  const renderNavLinks = () => {
    if (isLoggedIn) {
      return (
        <>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/company-info">Company Info</NavLink>
              </li>
            </ul>
            {/* <div className="profile">{userData.name && userData.name.charAt(0).toUpperCase()}</div> */}
          </div>
        </>
      );
    } else {
      return (
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </ul>
        </div>
      );
    }
  };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">GeekSynergy</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar != true ? <IoMenu /> : <IoClose />}
        </div>

        {renderNavLinks()}
      </div>
    </nav>
  );
};

export default Navbar;
