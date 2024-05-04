import React from "react";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <div className="navbar-brand text-uppercase">John doe</div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#accueil">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#service">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#realisation">
                  Réalisations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#contact">
                  Me_contacter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
