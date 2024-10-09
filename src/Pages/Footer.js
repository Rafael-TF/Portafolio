import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiFramer, SiJavascript } from 'react-icons/si';
import '../Styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const AnimatedHeader = ({ children }) => (
    <motion.h3 
      className="animated-header"
      whileHover={{ "::after": { backgroundPosition: "100% 0" } }}
    >
      {children}
    </motion.h3>
  );

  return (
    <motion.footer
      className="footer"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="footer-content">
        <motion.div className="footer-section" variants={childVariants}>
          <AnimatedHeader>Rafael Travado</AnimatedHeader>
          <p>Desarrollador Web Full Stack</p>
          <div className="tech-stack">
            <p>Desarrollado con:</p>
            <div className="tech-icons">
              <SiReact title="React" />
              <SiTailwindcss title="Tailwind CSS" />
              <SiFramer title="Framer Motion" />
              <SiJavascript title="JavaScript" />
            </div>
          </div>
        </motion.div>
        
        <motion.div className="footer-section" variants={childVariants}>
          <AnimatedHeader>Navegación Rápida</AnimatedHeader>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Sobre Mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </motion.div>
        
        <motion.div className="footer-section" variants={childVariants}>
          <AnimatedHeader>Conectemos</AnimatedHeader>
          <p>
            <FaEnvelope className="icon-email" />
            <a href="mailto:rafa_trafeg@hotmail.com" className="email-link">
              rafa_trafeg@hotmail.com
            </a>
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/rafael-travado-4a1b6437/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/Rafael-TF" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div className="footer-bottom" variants={childVariants}>
        <p>Diseñado y desarrollado por Rafael Travado © {currentYear}</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;