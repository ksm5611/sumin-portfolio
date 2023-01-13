import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Projects from "./components/Projects";
import AboutMe from "./components/Aboutme/AboutMe";
import Intro from "./components/Intro/Intro";

const App = () => {
  return (
    <Router>
      <Header />
      <Intro />
      <Projects />
      <AboutMe />
    </Router>
  );
};

export default App;
