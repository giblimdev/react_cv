import React from "react";
import freshfood from "../asset/img/freshfood.jpg";
import akira from "../asset/img/akira.jpeg";
import bienetre from "../asset/img/bienetre.jpg";

function TheRealisations() {
  const articles = [
    {
      id_article: 1,
      titre: "Fresh food",
      description: "Réalisation d'un site avec commande en ligne.",
      img: freshfood,
      techno: "Site réalisé avec PHP et MySQL",
    },
    {
      id_article: 2,
      titre: "Restaurent Akira",
      description: "Réalisation d'un site vitrine.",
      img: akira,
      techno: "Site réalisé avec WoedPress",
    },
    {
      id_article: 3,
      titre: "Espace bien-être",
      description:
        "Réalisation d'un site vitrine pour un praticien de bien-être.",
      img: bienetre,
      techno: "Site réalisé en HTML/CSS",
    },
  ];

  return (
    <>
      <div id="ortfolio" class="header_mask"></div>
      <div className="fond"></div>
      <h1 className="text-center">PORTFOLIO</h1>
      <p className="text-center">Voici quelleques-unes de mes réalisation.</p>
      <div className="hr"></div>
      <div
        className="container-fluid d-flex flex-wrap justify-content-center"
        style={{ maxWidth: "80%" }}
      >
        <div id="blog" class="header_mask"></div>
        {articles.map((article) => (
          <div
            className="card m-2"
            style={{ width: "200px" }}
            key={article.id_article}
          >
            <div className="porfolio_image">
              <div className="img-size">
                <img
                  src={article.img}
                  alt={article.titre}
                  className="card-img-top"
                />
              </div>
            </div>
            <div className="titre-size">
              <h2>{article.titre}</h2>
            </div>
            <div className="descrition-size">
              <p>{article.description}</p>
            </div>
            <button className="btn btn-outline-primary">Voir</button>
            <p class="card-footer">{article.techno}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default TheRealisations;
