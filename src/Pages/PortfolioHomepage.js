import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Transition from "../Components/Transition"; // Asegúrate de importar el componente de transición
import styles from "../Styles/PortfolioHomepage.module.css";

const PortfolioHomepage = () => {
  const [skill, setSkill] = useState("Aplicaciones Web");

  const skills = [
    "APIs Eficientes",
    "Arquitectura Full Stack",
    "Enfoque en el Usuario",
    "Optimización Escalable"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSkill((prevSkill) => {
        const currentIndex = skills.indexOf(prevSkill);
        const nextIndex = (currentIndex + 1) % skills.length;
        return skills[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { scrollY } = useScroll();

  // Mantén el movimiento en la sección principal si es necesario
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);

  // Aplicamos la opacidad tanto para la imagen como para la barra vertical
  const imageOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const stripOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const uniqueKey = "portfolio"; // O usa skill como key

  // Animación de swipe más suave y fluida
  const swipeAnimation = {
    initial: { x: "-100%", opacity: 0, scale: 0.9 },
    animate: {
      x: "0%",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.42, 0, 0.58, 1], // Corrección en la curva Bezier
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 1.5,
        ease: [0.42, 0, 0.58, 1], // Corrección en la curva Bezier
      },
    },
  };

  return (
    <Transition key={uniqueKey}>
      <motion.div
        className={styles.portfolioContainer}
        id="home"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.8, ease: "easeOut" } }}
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
        }}
      >
        <motion.div className={styles.mainContent} style={{ y: y1 }}>
          <motion.div
            className={styles.verticalStrip}
            style={{ opacity: stripOpacity }}
          ></motion.div>
          
          <motion.div
            className={styles.nameContainer}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
            }}
          >
            <h1 className={styles.name}>
              <span className={styles.nameDark}>Rafael</span>
              <span className={styles.nameLight}> Travado</span>
            </h1>
          </motion.div>

          <motion.img
            src="/IMG_7801.PNG"
            alt="Rafael Travado"
            className={styles.profileImage}
            style={{ opacity: imageOpacity }}
          />

          <motion.div
            className={styles.titleContainer}
            style={{ opacity: imageOpacity }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
            }}
          >
            <h2 className={styles.title}>DESARROLLADOR WEB</h2>
            <p className={styles.subtitle}>Full Stack</p>
            <motion.p
              key={skill}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={swipeAnimation}
              className={styles.changingSkill}
            >
              {skill}
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </Transition>
  );
};

export default PortfolioHomepage;