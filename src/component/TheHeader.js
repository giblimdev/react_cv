import React from "react";
function Header() {
  return (
    <>
      <div className="solblue  container-fluid navbar  navbar-dark bg-dark">
        <div className="sol text-center">
          <a className="navbar-brand" href="#header">
            JOHN DOE
          </a>
        </div>
        <div className="sol ">
          <button
            class=" navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="nav text-uppercase ul">
            <li className="">
              <a className="" href="#accueil">
                Accueil
              </a>
            </li>
            <li className="">
              <a className="" href="#services">
                Services
              </a>
            </li>
            <li className="">
              <a className="" href="#realisation">
                Réalisation
              </a>
            </li>
            <li className="">
              <a className="" href="#blog">
                Blog
              </a>
            </li>
            <li className="">
              <a className="" href="#contact">
                Me contacter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sol solco mt-3">
        <h1 className="sol">1</h1>
        <h2 className="solblue">2</h2>
      </div>
    </>
  );
}

export default Header;
