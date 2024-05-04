import React from "react";
import MyImage1 from "../asset/img/code.jpg";
import MyImage2 from "../asset/img/money.jpg";
import MyImage3 from "../asset/img/ordigoogle.jpg";
import MyImage4 from "../asset/img/pctable.jpg";
import MyImage5 from "../asset/img/seo.jpg";
import MyImage6 from "../asset/img/patch.png";

function TheBlog() {
  const articles = [
    {
      id_article: 1,
      titre: "Coder son site en HTML/CSS",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: MyImage1,
      date: "22 août 2022",
    },
    {
      id_article: 2,
      titre: "Vendre ses produits sur le web",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: MyImage2,
      date: "20 août 2022",
    },
    {
      id_article: 3,
      titre: "Vendre ses produits sur le web",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: MyImage3,
      date: "1 août 2022",
    },
    {
      id_article: 4,
      titre: "Coder en responsive desing",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: MyImage4,
      date: "31 juillet 2022",
    },
    {
      id_article: 5,
      titre: "Technique de référencement",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: MyImage5,
      date: "30 juillet 2022",
    },
    {
      id_article: 6,
      titre: "Apprendre à coder",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: MyImage6,
      date: "12 juillet 2022",
    },
  ];

  return (
    <>
      <h1 className="text-center">Blog</h1>
      <p className="text-center">
        Retrouvez ici quelques articles sur le développement web.
      </p>
      <div className="hr"></div>
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
            <button className="btn-primary">Lire la suite</button>
            <p>{article.date}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TheBlog;
