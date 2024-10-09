import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiCsharp,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMicrosoftazure,
} from "react-icons/si";
import styles from "../Styles/Skills.module.css";

const educationData = [
  {
    id: "fullstack",
    title: "Mi Transformación en Desarrollador Full Stack",
    content: `En solo 985 horas, pasé de ser un curioso de la tecnología a un desarrollador full stack capaz de construir aplicaciones web de principio a fin. Este viaje no fue solo un curso intensivo, sino una metamorfosis digital. Desde los fundamentos de HTML, CSS y JavaScript hasta dominar frameworks como Angular, React y Node.js, cada línea de código fue un ladrillo en la construcción de mi nueva identidad. El mundo del desarrollo web me atrapó y me desafió a pensar de forma creativa y lógica. Con ASP.NET y C#, descubrí el poder de los servicios web y la importancia de escribir código limpio y testable. La metodología Scrum me enseñó a colaborar y adaptarme en un entorno en constante evolución. Hoy, me siento listo para enfrentar cualquier desafío y aportar valor a cualquier equipo de desarrollo.`,
  },
  {
    id: "law",
    title: "Diseñando el Futuro: Un Desarrollador Web con Base Legal",
    content: `Cinco años dedicado a las leyes me forjaron una mente analítica y una pasión por resolver problemas complejos. Sin embargo, el mundo de la tecnología me cautivó con su dinamismo y su capacidad para transformar el mundo. La transición no fue fácil, pero la disciplina y la capacidad de aprendizaje autodidacta que cultivé en la UNED me permitieron sumergirme en el código. Hoy, mi formación en Derecho me proporciona una base sólida en lógica, análisis y resolución de problemas.una perspectiva única en el desarrollo web. Soy un puente entre dos mundos, fusionando la lógica jurídica con la creatividad del desarrollo.`,
  },
];

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaCode },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "Angular", icon: FaAngular },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "C# / ASP.NET", icon: SiCsharp },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL Server", icon: SiMicrosoftsqlserver },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    category: "Otros",
    skills: [
      { name: "Pruebas Unitarias", icon: FaCode },
      { name: "Scrum", icon: FaCode },
      { name: "Accesibilidad Web", icon: FaCode },
      { name: "Azure", icon: SiMicrosoftazure },
    ],
  },
];

const FadeInOutSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const SectionTitle = ({ children }) => (
  <FadeInOutSection>
    <h2 className={styles.sectionTitle}>{children}</h2>
  </FadeInOutSection>
);

const EducationCard = ({ title, content, isActive, onClick, id }) => (
  <FadeInOutSection>
    <div
      className={`${styles.educationCard} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      id={id} // Para scroll automático
    >
      <h3>{title}</h3>
      {isActive && <p>{content}</p>}
    </div>
  </FadeInOutSection>
);

const SkillIcon = React.memo(({ Icon, name }) => (
  <motion.div
    className={styles.skillIcon}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon size={40} />
    <span>{name}</span>
  </motion.div>
));

const SkillCategory = React.memo(({ category, skills }) => (
  <FadeInOutSection>
    <div className={styles.skillCategory}>
      <h3>{category}</h3>
      <div className={styles.skillsGrid}>
        {skills.map((skill, idx) => (
          <SkillIcon key={idx} Icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  </FadeInOutSection>
));

const Skills = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (id) => {
    setActiveCard((prevId) => {
      const newId = prevId === id ? null : id;

      // Si la tarjeta se está cerrando (cuando newId es null)
      if (prevId && !newId) {
        const element = document.getElementById(prevId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }

      return newId;
    });
  };

  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillsContent}>
        <SectionTitle>Mi Trayectoria Profesional</SectionTitle>

        <section className={styles.educationSection}>
          {educationData.map((edu) => (
            <EducationCard
              key={edu.id}
              title={edu.title}
              content={edu.content}
              isActive={activeCard === edu.id}
              onClick={() => handleCardClick(edu.id)}
              id={edu.id} // Para scroll automático
            />
          ))}
        </section>

        <SectionTitle>Mis Habilidades Técnicas</SectionTitle>
        <div className={styles.skillsCategories}>
          {skillsData.map((category, index) => (
            <SkillCategory
              key={index}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
