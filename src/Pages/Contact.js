import React, { useEffect, useRef, useState } from 'react';
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import '../Styles/Contact.css';

const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init('zXI1tejWwsDua0TMm');
  }, []);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);  // El mensaje desaparecerá después de 5 segundos

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'default_service';
    const templateID = 'template_izrvanp';

    emailjs.sendForm(serviceID, templateID, event.target)
      .then(() => {
        setIsSubmitted(true);
        if (formRef.current) {
          formRef.current.reset();
        }
      }, (err) => {
        console.error('Error al enviar el email:', err);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <AnimatedSection>
          <h1>Contáctame</h1>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2>¿Tienes un proyecto en mente?</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="project-description">
            <h3>Desarrollemos tu idea juntos</h3>
            <p>
              Ya sea que necesites una aplicación web innovadora, una solución móvil eficiente, 
              o asesoría tecnológica para tu negocio, estoy aquí para ayudarte. 
              Juntos, podemos transformar tu visión en realidad y llevar tu proyecto al siguiente nivel.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <form ref={formRef} id="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="nombre" id="nombre" required />
            </div>
            <div className="field">
              <label htmlFor="correo">Correo</label>
              <input type="email" name="correo" id="correo" required />
            </div>
            <div className="field">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea name="mensaje" id="mensaje" required></textarea>
            </div>
            <input 
              type="submit"
              id="button"
              value={isSubmitting ? "Enviando..." : "Enviar Email"}
              disabled={isSubmitting}
            />
          </form>
        </AnimatedSection>
        <AnimatePresence>
          {isSubmitted && (
            <motion.div 
              className="success-message"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              ¡El correo se ha enviado correctamente!
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatedSection delay={0.4}>
          <div className="project-details-description">
            <p>Comparte tus ideas, objetivos y cualquier desafío que estés enfrentando. 
               Estoy aquí para escucharte y ofrecer soluciones adaptadas a tus necesidades.</p>
          </div>
        </AnimatedSection>
        </div>
    </section>
  );
};

export default Contact;