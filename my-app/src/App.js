import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/Aboutme/AboutMe";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Intro />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
