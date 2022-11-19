import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import AboutMe from "./Routes/AboutMe";
import Services from "./Routes/Services";
import Briefcase from "./Routes/Briefcase";
import SocialNetworks from "./Components/SocialNetworks";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Manila from "./Routes/Manila";
import React from "./Routes/React";
import NodeJs from "./Routes/NodeJs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <SocialNetworks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre_mi" element={<AboutMe />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/portafolio" element={<Briefcase />} />
          <Route path="/portafolio/manila" element={<Manila />} />
          <Route path="/portafolio/react" element={<React />} />
          <Route path="/portafolio/nodejs" element={<NodeJs />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
