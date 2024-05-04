function TheAccueil() {
  return (
    <>
      <div id="accueil" class="h-100 ">
        <div class="header_mask"></div>
        <div className="accueil_contener bg-image ">
          <div className="text-center accueil_box">
            <div>
              <h1 className="text-white">Bonjour, je suis John Doe</h1>
              <p className="text-white font-weight-bold fs-5">
                Développeur web full stack
              </p>
              <a href="#aboutme">
                <button className="btn btn-primary btn-sm">
                  En savoir plus
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TheAccueil;
