import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects";
import AboutMe from "./components/Aboutme/AboutMe";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <Router>
      <Header />
      <Intro />
      <Projects />
      <AboutMe />
      <Contact />
    </Router>
  );
};

export default App;
