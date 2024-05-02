import React from "react";
import p1 from "../asset/img/1.jpg";
import p2 from "../asset/img/2.jpg";
import p3 from "../asset/img/2.jpg";

function TheRealisations() {
  const articles = [
    {
      id_article: 1,
      titre: "Fresh food",
      description: "Réalisation d'un site avec commande en ligne.",
      img: p1,
      techno: "Site réalisé avec PHP et MySQL",
    },
    {
      id_article: 2,
      titre: "Restaurent Akira",
      description: "Réalisation d'un site vitrine.",
      img: p2,
      techno: "Site réalisé avec WoedPress",
    },
    {
      id_article: 3,
      titre: "Espace bien-être",
      description:
        "Réalisation d'un site vitrine pour un praticien de bien-être.",
      img: p3,
      techno: "Site réalisé en HTML/CSS",
    },
  ];

  return (
    <>
      <h1 className="text-center">PORTFOLIO</h1>
      <p className="text-center">Voici quelleques-unes de mes réalisation.</p>

      <div
        className="container-fluid d-flex flex-wrap justify-content-center"
        style={{ maxWidth: "80%" }}
      >
        {articles.map((article) => (
          <div
            className="card m-2"
            style={{ width: "200px" }}
            key={article.id_article}
          >
            <img
              src={article.img}
              alt={article.titre}
              className="card-img-top"
            />
            <h2>{article.titre}</h2>
            <p>{article.description}</p>
            <button className="btn btn-outline-primary">Voir</button>
            <p class="card-footer">{article.techno}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default TheRealisations;
