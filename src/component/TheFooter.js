import logoGit from "../asset/img/icon/github.svg";
import logoX from "../asset/img/icon/square-x-twitter.svg";
import logolink from "../asset/img/icon/linkedin.svg";
function TheFooter() {
  return (
    <>
      <footer>
        <div className="">
          <div className="m-bottom mb-4">
            <strong>John Doe</strong>
            <p>40 Rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p>Téléphone : 06 20 30 40 50</p>
            <div className=" d-flex ">
              <img src={logoGit} />
              <img src={logoX} alt=" logo X" />
              <img src={logolink} alt="logolink" />
            </div>
          </div>
          <div className="">
            <strong>Liens utiles</strong>
            <ul className="LiFooter">
              <li>accueil </li> <li> A propos </li> <li> Services</li>{" "}
              <li> Me contacter</li> <li>Mentions légales </li>
            </ul>
          </div>
          <div className="">
            <strong>Mes dernières réalisations</strong>
            <ul className="LiFooter">
              <li> Fresh food</li> <li>Restaurent Akira </li>
              <li>Espace bien-être </li>
            </ul>
          </div>
          <div className="">
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
