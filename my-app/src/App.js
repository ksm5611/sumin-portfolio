import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Intro from "./components/Intro/Intro";

const App = () => {
  return (
    <Router>
      <Header />
      <Intro />
      <Skills />
      <Projects />
    </Router>
  );
};

export default App;
