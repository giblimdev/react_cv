import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMobile,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

function TheMentions() {
  return (
    <div className="container mx-auto">
      <h1>MENTIONS LEGALES</h1>
      <div>
        <div class="border CollapseTitre">
          <a
            className="CollapseTitre"
            data-bs-toggle="collapse"
            href="#collapseEditorContent"
            role="button"
            aria-expanded="false"
            aria-controls="collapseEditorContent"
          >
            Editeur du site
          </a>
        </div>
        <div class="collapse" id="collapseEditorContent">
          <h3>John Doe</h3>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp;40 Rue Laure Diebold
          </p>
          <p>69009 Lyon, France</p>
          <p>
            <FontAwesomeIcon icon={faMobile} />
            &nbsp;06 20 30 40 50
          </p>
          <p>
            &nbsp;
            <FontAwesomeIcon icon={faEnvelope} />
            John Doe@gmail.com
          </p>
        </div>
      </div>
      <div>
        <div class="border CollapseTitre">
          <a
            class="CollapseTitre"
            data-bs-toggle="collapse"
            href="#collapseEditorEdit"
            role="button"
            aria-expanded="false"
            aria-controls="collapseEditorContent"
          >
            Hébergeur
          </a>
        </div>

        <div class="border collapse" id="collapseEditorEdit">
          <p> Always Data</p>
          <p>91 rue du Faubourg Sint Honoré</p>
          <p>
            <FontAwesomeIcon icon={faGlobe} />
            &nbsp;www.Awaysdata.com 75008 Paris
          </p>
        </div>
      </div>
      <div class="border CollapseTitre">
        <a
          class="CollapseTitre"
          data-bs-toggle="collapse"
          href="#collapseEditorCredits"
          role="button"
          aria-expanded="false"
          aria-controls="collapseEditorContent"
        >
          Crédits
        </a>
      </div>
      <div>
        <div class="collapse" id="collapseEditorCredits">
          <p>Site développé par John Doe, étudiant du CEF.</p>
          <p>
            Les images libres de droit sont issues du site
            <a className="collapsea" href="https://pixabay.com/fr/">
              Pixabay
            </a>
            .
          </p>
        </div>
      </div>
      <div />
    </div>
  );
}

export default TheMentions;
