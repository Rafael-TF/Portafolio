import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Transition from "../Components/Transition";
import TimelineIcons from "../Components/TimelineIcons";
import "../Styles/AboutMe.css";

const timelineEvents = [
  {
    year: 2019,
    title: "El Comienzo de la Aventura Legal",
    description: "Obtuve mi título en Derecho, un logro que muchos consideran el culmen de una carrera, pero para mí, fue solo el inicio de una historia que estaba a punto de transformarse.",
    icon: TimelineIcons.LegalBeginning,
  },
  {
    year: "2019-2022",
    title: "La Larga Búsqueda",
    description: "Me sumergí en un océano de libros y exámenes, esperando capturar el sueño de convertirme en funcionario público. Sin embargo, cada día que pasaba, una inquietante sensación crecía en mi interior: la pasión por el derecho se estaba desvaneciendo.",
    icon: TimelineIcons.LongSearch,
  },
  {
    year: 2021,
    title: "Un Destello de Creatividad",
    description: "Descubrí el diseño y la programación de páginas web, un campo vibrante donde podía combinar lógica y arte. Fue como si hubiera encontrado una nueva voz en un mundo que antes solo conocía desde las leyes.",
    icon: TimelineIcons.CreativitySpark,
  },
  {
    year: "Febrero 2023",
    title: "La Decisión",
    description: "Decidí dar un giro radical a mi carrera y me inscribí en un curso de desarrollo web full stack. Era el momento de dejar atrás el traje y los libros de leyes para sumergirme en un océano de códigos, colores y diseños.",
    icon: TimelineIcons.DecisionPoint,
  },
  {
    year: "Marzo 2024",
    title: "Listo para la Aventura",
    description: "Hoy, soy un desarrollador junior, y cada día es una nueva oportunidad para dejar volar mi imaginación. Me encanta diseñar páginas web que no solo sean visualmente atractivas, sino que también tengan vida, funcionalidad y un propósito a través de proyectos backend.",
    icon: TimelineIcons.ReadyForAdventure,
  },
  {
    year: "El Futuro",
    title: "¡Aventuras por Delante!",
    description: "A medida que continúo este viaje, estoy emocionado por explorar nuevas tecnologías y colaborar en proyectos desafiantes. Mis proyectos son mi lienzo, y el código, mi pincel.",
    icon: TimelineIcons.FutureAdventures,
  },
];

const TimelineEvent = ({ event, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000); // Duración del pulso
    }, 5000 + index * 1000); // Intervalo entre pulsos, escalonado para cada evento

    return () => clearInterval(interval);
  }, [index]);

  const eventVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={`timeline-event ${index % 2 === 0 ? "left" : "right"}`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={eventVariants}
    >
      <motion.div
        className="event-content"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 8px rgb(137, 161, 156)",
          transition: { duration: 0.3 },
        }}
      >
        <motion.div
          className="event-year"
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {event.year}
        </motion.div>
        <h3 className="event-title">{event.title}</h3>
        <p className="event-description">{event.description}</p>
        <div className="event-icon">
          <event.icon />
        </div>
      </motion.div>
      <div className={`timeline-indicator ${isPulsing ? 'pulsing' : ''}`}></div>
    </motion.div>
  );
};

const AboutMe = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <Transition>
      <motion.div
        className="about-me-container"
        id="about"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          className="about-me-title-container"
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h1 className="about-me-title">
            <span className="about-me-title-main">Sobre Mí</span>
            <span className="about-me-title-sub">Mi Viaje a Través del Desarrollo Web</span>
          </h1>
        </motion.div>
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <TimelineEvent key={index} event={event} index={index} />
          ))}
        </div>
      </motion.div>
    </Transition>
  );
};

export default AboutMe;