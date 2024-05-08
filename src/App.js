import { Routes, Route } from "react-router-dom";
import "./index.scss";
import TheHeader from "./component/TheHeader.js";
import Home from "./component/TheAccueil.js";
import Offre from "./component/TheOffers.js";
import Portfolio from "./component/ThePortfolio.js";
import Blog from "./component/TheBlog.js";
import Contact from "./component/ContactMe.js";
import TheFooter from "./component/TheFooter.js";
import AboutMe from "./component/AboutMe.js";
import NotFound from "./component/NotFound.js";

function App() {
  return (
    <div className="App">
      <TheHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offre" element={<Offre />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <TheFooter />
    </div>
  );
}

export default App;
