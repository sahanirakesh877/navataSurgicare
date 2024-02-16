import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black sticky-lg-top   ">
        <div className="container">
          <Link className="navbar-brand text-danger" to="/">
          Navata Surgicare
          </Link>
          <button
            className="navbar-toggler  text-white bg-danger"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon " />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="/endo">
                  Endovision System
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/medical">
                  Medical Setup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dental">
                  Dental Setup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
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
