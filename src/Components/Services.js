import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import '../Styles/Services.css'; // Aquí incluirás los estilos

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
];

const Services = () => {
  // Estado para manejar la visibilidad de la sección
  const { ref, inView } = useInView({
    threshold: 0.1, // Activar cuando el 10% del elemento es visible
    triggerOnce: false, // Permite que se active varias veces
  });

  // Animaciones para el título y la introducción
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

  // Animación para las tarjetas
  const cardAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 500 },
  });

  return (
    <section className="services-section" ref={ref}>
      <div className="services-content">
        <animated.h2 className="services-title" style={titleProps}>Mis Servicios</animated.h2>
        <animated.p className="services-intro" style={introProps}>
          En un mundo donde la digitalización se ha convertido en una necesidad, cada negocio merece una presencia en línea que refleje su esencia. Estoy aquí para ofrecerte soluciones personalizadas que impulsarán tu marca al siguiente nivel.
        </animated.p>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <animated.div className="service-card" key={index} style={cardAnimation}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </animated.div>
          ))}
        </div>
        <div className="contact-call-to-action">
          <p>¿Listo para llevar tu presencia en línea al siguiente nivel?</p>
          <a href="#contact" className="contact-button">Solicitar información</a>
        </div>
      </div>
    </section>
  );
};

export default Services;