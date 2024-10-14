import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import '../Styles/Services.css';

const servicesData = [
  {
    title: "Desarrollo de sitios web personalizados",
    description: "Creo sitios web a medida, adaptados a tus necesidades y objetivos. Desde simples páginas de presentación hasta tiendas en línea completas.",
    icon: "🌐",
  },
  {
    title: "Diseño web responsive",
    description: "Mis diseños se adaptan a cualquier dispositivo, asegurando una experiencia óptima para tus usuarios.",
    icon: "📱",
  },
  {
    title: "Integración de funcionalidades",
    description: "Incorporo diversas funcionalidades a tus sitios web, como formularios de contacto, galerías de imágenes, y mapas interactivos.",
    icon: "⚙️",
  },
  {
    title: "Optimización para motores de búsqueda (SEO)",
    description: "Aplico técnicas de SEO para mejorar la visibilidad de tu sitio web, ayudándote a atraer más tráfico orgánico.",
    icon: "🔍",
  },
  {
    title: "Desarrollo de aplicaciones web",
    description: "Construyo aplicaciones web escalables, seguras y optimizadas, utilizando las últimas tecnologías. Desde paneles de administración hasta soluciones de negocio personalizadas.",
    icon: "💻",
  },
  {
    title: "Desarrollo de bases de datos",
    description: "Diseño e implemento soluciones de bases de datos robustas y eficientes utilizando MongoDB, SQL y SQL Server. Optimizo el rendimiento y garantizo la integridad de tus datos para aplicaciones de cualquier escala.",
    icon: "🗄️",
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const titleProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(-20px)',
    config: { duration: 500 },
  });

  const introProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(-20px)',
    config: { duration: 500, delay: 200 },
  });

  const cardAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 500 },
  });

  return (
    <section className="services-section" ref={ref}>
      <div className="services-content">
        <animated.h2 style={titleProps} className="services-title">
          Mis Servicios
        </animated.h2>
        <animated.p style={introProps} className="services-intro">
          En un mundo digital en constante evolución, tu negocio merece soluciones tecnológicas de vanguardia. Ofrezco una gama completa de servicios diseñados para impulsar tu presencia en línea y optimizar tus operaciones digitales.
        </animated.p>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <animated.div
              key={index}
              style={cardAnimation}
              className="service-card"
            >
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </animated.div>
          ))}
        </div>
        <div className="contact-call-to-action">
          <p>¿Listo para llevar tu presencia digital al siguiente nivel?</p>
          <a href="#contact" className="contact-button">
            Solicitar información
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;