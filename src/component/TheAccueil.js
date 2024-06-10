import React from "react";
import { Link } from "react-router-dom";

function TheAccueil() {
  return (
    <div className="accueil">
      <div className="accueil_content">
        <h1 className="text-white">Bonjour, je suis John Doe</h1>
        <p className="text-white font-weight-bold fs-5">
          Développeur web full stack
        </p>
        <Link to="/aboutme" className="nav-link text-uppercase">
          <button className="btn btn-primary btn-sm">En savoir plus</button>
          <p className="text-white">hello</p>
        </Link>
      </div>
    </div>
  );
}

export default TheAccueil;
