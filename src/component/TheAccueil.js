import { Link } from "react-router-dom";
function TheAccueil() {
  return (
    <>
      <div id="accueil" class="accueil bg-image">
        <div class="header_mask"></div>
        <div className="accueil_contener">
          <div className="text-center accueil_box ">
            <h1 className="text-white">Bonjour, je suis John Doe</h1>
            <p className="text-white font-weight-bold fs-5">
              Développeur web full stack
            </p>
            <Link to="/aboutme" className="nav-link text-uppercase">
              <button className="btn btn-primary btn-sm">En savoir plus</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TheAccueil;
