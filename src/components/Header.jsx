import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsNavCollapsed(true);
  }, [location.pathname]);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black sticky-lg-top   ">
        <div className="container">
          <Link className="navbar-brand text-danger" to="/">
            Navata Surgicare
          </Link>
          <button
            className={`navbar-toggler  text-white bg-light ${
              isNavCollapsed ? "collapsed" : ""
            }`}
            type="button"
            onClick={handleNavCollapse}
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon " />
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link
                  className="nav-link active  "
                  aria-current="page"
                  to="/"
                  onClick={handleNavCollapse}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link  "
                  to="/endo"
                  onClick={handleNavCollapse}
                >
                  Endovision System
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/medical"
                  onClick={handleNavCollapse}
                >
                  Medical Setup
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/dental"
                  onClick={handleNavCollapse}
                >
                  Dental Setup
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/product"
                  onClick={handleNavCollapse}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  "
                  to="/contact"
                  onClick={handleNavCollapse}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
