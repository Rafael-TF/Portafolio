import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import PortfolioHomepage from "./Pages/PortfolioHomepage";
import AboutMe from "./Pages/AboutMe";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import PageTransition from "./Components/PageTransition";
import Services from "./Components/Services";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <Router>
      <div className="App">
      <Navbar setCurrentPage={setCurrentPage} isHomePage={currentPage === 'home'} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section id="home">
            <PortfolioHomepage />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="skills">
            <PageTransition>
              <Skills />
            </PageTransition>
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <section>
            <Footer />
          </section>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;
