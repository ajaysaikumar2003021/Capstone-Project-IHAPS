import React from "react";
import { Outlet, Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light header">
        <div className="container-fluid">
          <img
            className="navbar-brand logo"
            src="/assets/images/IHAPS-LOGO.png"
            href="#"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <span className="navbar-text">
              <ul
                className="navbar-nav me-auto mb-2
               mb-lg-0"
              >
                <li className="nav-item head-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item head-item">
                  <Link to="/about-ihaps" className="nav-link">
                    About IHAPS
                  </Link>
                </li>
                <li className="nav-item head-item">
                  <Link className="nav-link" to="/executive-director">
                    Executive Director
                  </Link>
                </li>

                <li className="nav-item head-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    WorkGroups
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/curriculum">
                        Curriculum
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/faculty">
                        Research and Scholarship
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/community-engagement"
                      >
                        Community Engagement
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/food">
                        Food and Waste
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/transportation">
                        Air and Transportation
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Other WorkGroups
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item head-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Reports & Data
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/report-curriculum">
                        Curriculum
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Research and Scholarship
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Community Engagement
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Food and Waste
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Air and Transportation
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Other WorkGroups
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item head-item">
                  <Link className="nav-link" to="/login">
                    Login/Signup
                  </Link>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
