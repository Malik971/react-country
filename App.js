import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Portfolio from "./pages/Portfolio";
import Erreur from "./pages/Erreur";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        {/* path="*" fonctionne si l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
