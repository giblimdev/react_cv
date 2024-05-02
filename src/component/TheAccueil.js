function TheAccueil() {
  return (
    <div className="d-flex align-items-center justify-content-center text-center vh-100 bg-image">
      <div>
        <h1 className="text-white">Bonjour, je suis John Doe</h1>
        <p className="text-white font-weight-bold fs-5">
          Développeur web full stack
        </p>
        <a href="#aboutme">
          <button className="btn btn-primary btn-sm">En savoir plus</button>
        </a>
      </div>
    </div>
  );
}

export default TheAccueil;
