import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css'

const Navigation = () => {
    const {user, logout} = useAuth();

    return (
      <nav
        className="navbar navbar-expand-lg sticky-top text-white
 "
      >
        <div className="container-fluid ">
          <span className="text-white fw-bolder">CarHouse</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ background: 'white', borderRadius: '5px' }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <Link
                  to="/home"
                  className="nav-item nav-link active text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="nav-item nav-link active text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="nav-item nav-link active text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/explore" className="nav-item nav-link text-white">
                  Explore
                </Link>
              </li>
              {user?.email && (
                <li>
                  <Link
                    to="/dashboard"
                    className="nav-item nav-link text-white"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
            <div className="d-flex">
              {user?.email && (
                <span className="my-auto me-2 text-white">
                  {user.displayName}
                </span>
              )}
              {user?.email ? (
                <Link to="/home">
                  <button
                    onClick={logout}
                    className=" nav-logout-btn"
                    type="submit"
                  >
                    Log Out
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className=" nav-login-btn" type="submit">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navigation;