import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";
//import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TheHeader from "./component/TheHeader.js";
import TheAccueil from "./component/TheAccueil.js";
import AboutMe from "./component/AboutMe.js";
import TheRealisations from "./component/TheRealisations.js";
import TheBlog from "./component/TheBlog.js";
import ContactMe from "./component/ContactMe";
import TheMentions from "./component/TheMentions.js";
import TheFooter from "./component/TheFooter";
/*import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    {" "}
    <App />{" "}
  </BrowserRouter>,
  document.getElementById("root")
);*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TheHeader />
    <TheAccueil />
    <AboutMe />
    <TheRealisations />
    <TheBlog />
    <ContactMe />
    <TheMentions />
    <TheFooter />
  </React.StrictMode>
);
/*
    
   
*/

reportWebVitals();
