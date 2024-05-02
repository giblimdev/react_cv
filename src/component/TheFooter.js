import logoGit from "../asset/img/github.svg";
import logoX from "../asset/img/square-x-twitter.svg";
import logolink from "../asset/img/linkedin.svg";
function TheFooter() {
  return (
    <>
      <footer>
        <div className=" box">
          <div className="coldiv">
            <strong>John Doe</strong>
            <p>40 Rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>Téléphone : 06 20 30 40 50</p>
            <div className=" d-flex justify-content-center align-items-center">
              <img className="footer_logo" src={logoGit} alt="logoGit" />
              <img className="footer_logo" src={logoX} alt="logoX" />
              <img className="footer_logo" src={logolink} alt="logolink" />
            </div>
          </div>
          <div className="coldiv">
            <strong>Liens utiles</strong>
            <ul className="LiFooter">
              <li>accueil </li> <li> A propos </li> <li> Services</li>{" "}
              <li> Me contacter</li> <li>Mentions légales </li>
            </ul>
          </div>
          <div className="coldiv">
            <strong>Mes dernières réalisations</strong>
            <ul className="LiFooter">
              <li> Fresh food</li> <li>Restaurent Akira </li>
              <li>Espace bien-être </li>
            </ul>
          </div>
          <div className="coldiv">
            <strong>Mes derniers articles</strong>
            <ul className="LiFooter">
              <li>Coder son site en HTML/CSS</li>
              <li>Vendre ses produits sur le web</li>
              <li>Se positionner sur Google</li>
            </ul>
          </div>
        </div>
        <div className="bg-dark text-center text-white">
          (c) Designed by John Doe
        </div>
      </footer>
    </>
  );
}

export default TheFooter;
