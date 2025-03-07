'use client'

import React, { useState, useEffect, useRef } from 'react'
import { X as XIcon, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPython } from 'react-icons/fa'
import { SiPandas, SiNumpy, SiScikitlearn, SiStreamlit, SiApachespark, SiPlotly } from 'react-icons/si'

// Importar archivos de medios
import extasisVideo from '../Recursos/extasis/extasis.mp4'
import extasisImage1 from '../Recursos/extasis/Imagen1.jpg'
import extasisImage2 from '../Recursos/extasis/Imagen2.jpg'
import extasisImage3 from '../Recursos/extasis/Imagen3.jpg'
import extasisImage4 from '../Recursos/extasis/Imagen4.jpg'
import extasisImage5 from '../Recursos/extasis/Imagen5.jpeg'
import extasisImage from '../Recursos/extasis/Extasis.png'

import effidoVideo from '../Recursos/effido/EffiDo.mp4'
import effidoImage from '../Recursos/effido/EFFIDO.jpg'
import effidoImage1 from '../Recursos/effido/ImagenEffido1.jpg'
import effidoImage2 from '../Recursos/effido/ImagenEffido2.jpg'
import effidoImage3 from '../Recursos/effido/ImagenEffido3.jpg'
import effidoImage4 from '../Recursos/effido/ImagenEffido4.jpg'

import streamlitDiamond from '../Recursos/streamlit/streamlitDiamonds.png'
import StreamlitDiamondsVideo from '../Recursos/streamlit/StreamlitDiamondsVideo.mp4'
import imageStreamlit1 from '../Recursos/streamlit/imageStreamlit1.jpg';
import imageStreamlit2 from '../Recursos/streamlit/imageStreamlit2.jpg';
import imageStreamlit3 from '../Recursos/streamlit/imageStreamlit3.jpg';
import imageStreamlit4 from '../Recursos/streamlit/imageStreamlit4.jpg';
import imageStreamlit5 from '../Recursos/streamlit/imageStreamlit5.jpg';
import imageStreamlit6 from '../Recursos/streamlit/imageStreamlit6.jpg';

import revizoomMockup from '../Recursos/revizoom/_Mockup ReviZoom Bolg.png'
import revizoomVideo from '../Recursos/revizoom/Video ReviZoom.mp4'
import revizoom1 from '../Recursos/revizoom/revizoom1.jpeg';
import revizoom2 from '../Recursos/revizoom/revizoom2.jpeg';
import revizoom3 from '../Recursos/revizoom/revizoom3.jpeg';
import revizoom4 from '../Recursos/revizoom/revizoom4.jpeg';

// Importar iconos
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiMui } from 'react-icons/si'

const projectsData = [
  {
    id: 1,
    title: "ÉXTASIS GASTROBAR",
    video: extasisVideo,
    image: extasisImage,
    description: "ÉXTASIS GASTROBAR es un proyecto innovador que fusiona la alta cocina con un ambiente moderno y vibrante. Este sitio web presenta una experiencia inmersiva que refleja la esencia del restaurante, destacando su menú único, el ambiente sofisticado y la filosofía culinaria.",
    technologies: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs }
    ],
    gallery: [extasisImage1, extasisImage2, extasisImage3, extasisImage4, extasisImage5],
    link: "https://extasis-gastrobar-rafaeltravado.netlify.app/",
    github: "https://github.com/Rafael-TF/Restaurante",
    features: [
      "Diseño web responsivo que garantiza una experiencia óptima en todos los dispositivos",
      "Interfaz de usuario intuitiva y atractiva que refleja la identidad del restaurante",
      "Menú interactivo con animaciones suaves y descripciones detalladas",
      "Galería de imágenes optimizada para mostrar el ambiente del restaurante y sus platos",
      "Integración seamless con redes sociales para aumentar la presencia online",
      "Tiempo de carga rápido para una mejor experiencia de usuario y ranking en buscadores"
    ]
  },
  {
    id: 2,
    title: "EffiDo: Aplicación de Gestión de Tareas",
    video: effidoVideo,
    image: effidoImage,
    description: "EffiDo es una aplicación web completa de gestión de tareas diseñada para aumentar la productividad personal y profesional. Combina un frontend intuitivo y atractivo con un backend robusto para ofrecer una experiencia de usuario fluida y eficiente en la organización y seguimiento de tareas.",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Material-UI", icon: SiMui },
      { name: "JavaScript", icon: FaJs }
    ],
    gallery: [effidoImage1, effidoImage2, effidoImage3, effidoImage4],
    link: "https://effido.onrender.com/",
    github: "https://github.com/Rafael-TF/EffiDo",
    features: [
      "Interfaz de usuario moderna y responsiva desarrollada con React y Material-UI",
      "Backend potente construido con Node.js, Express y MongoDB",
      "Autenticación segura de usuarios mediante JWT",
      "Gestión completa de tareas con CRUD, prioridades y fechas de vencimiento",
      "Visualización de tareas en formato de calendario y lista",
      "Dashboard personalizado con estadísticas de productividad",
      "Perfiles de usuario con seguimiento de logros y progreso",
      "API RESTful para la comunicación eficiente entre frontend y backend",
      "Filtrado y ordenación avanzada de tareas",
      "Exportación de tareas y generación de informes en PDF",
      "Optimización de rendimiento con lazy loading y code splitting",
      "Diseño adaptativo para una experiencia consistente en dispositivos móviles y de escritorio"
    ]
  },
  {
    id: 3,
    title: "Diamond Analytics: Aplicación de Ciencia de Datos",
    video: StreamlitDiamondsVideo,
    image: streamlitDiamond,
    description: "Diamond Analytics es una aplicación web interactiva desarrollada con Streamlit que permite analizar y predecir precios de diamantes utilizando modelos de Machine Learning. La app facilita la exploración de datos, visualización de patrones y simulaciones en tiempo real, ofreciendo una solución intuitiva para el análisis de datos.",
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Scikit-Learn", icon: SiScikitlearn },
      { name: "Streamlit", icon: SiStreamlit },
      { name: "PySpark", icon: SiApachespark },
      { name: "Plotly", icon: SiPlotly }
    ],
    gallery: [imageStreamlit1, imageStreamlit2, imageStreamlit3, imageStreamlit4, imageStreamlit5, imageStreamlit6],
    link: "https://machine-learning-diamonds-rafaeltravado.streamlit.app/",
    github: "https://github.com/Rafael-TF/Machine-learning-Diamonds",
    features: [
      "Exploración de datos con visualizaciones interactivas",
      "Predicción de precios de diamantes basada en modelos de Machine Learning",
      "Interfaz sencilla y dinámica con Streamlit",
      "Comparaciones en tiempo real con datos del mercado",
      "Procesamiento y limpieza de datos automatizados",
      "Implementación de algoritmos de regresión y clasificación"
    ]
  },
  {
    id: 4,
    title: "ReviZoom: Blog de Análisis y Recomendaciones",
    video: revizoomVideo,
    image: revizoomMockup,
    description: "ReviZoom es una plataforma web enfocada en análisis y recomendaciones de productos, ofreciendo una experiencia de usuario optimizada y un diseño moderno. Desarrollado con tecnologías web avanzadas, integra interactividad, animaciones y navegación intuitiva.",
    technologies: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs }
    ],
    gallery: [revizoom1, revizoom2, revizoom3, revizoom4],
    link: "https://revizoomblog.netlify.app/",
    github: "https://github.com/Rafael-TF/ReviZoomBlog",
    features: [
      "Diseño moderno y minimalista con CSS avanzado",
      "Interfaz totalmente responsive para móviles y escritorio",
      "Menú de navegación interactivo con efecto hamburguesa",
      "Sistema de búsqueda y filtrado dinámico en tiempo real",
      "Paginación automática para una mejor experiencia de usuario",
      "Animaciones CSS y transiciones suaves para mejorar la navegación",
      "Optimización de rendimiento y accesibilidad"
    ]
  }
]

const categories = ['todos', 'web', 'mobile', 'design']

export default function ProjectGallery() {
    const [filter, setFilter] = useState('todos')
    const [selectedProject, setSelectedProject] = useState(null)
    const galleryRef = useRef(null)
  
    useEffect(() => {
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          setSelectedProject(null);
        }
      };
  
      window.addEventListener('keydown', handleEscape);
  
      return () => {
        window.removeEventListener('keydown', handleEscape);
      };
    }, []);
  
    return (
      <div className="min-h-screen bg-[#1a1a1a] py-12 px-4 sm:px-6 lg:px-8" ref={galleryRef}>
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-5xl font-extrabold text-[#e3f4f1] mb-8 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Mis Proyectos
          </motion.h2>
          <motion.div 
            className="flex justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors duration-300 ${
                  filter === category
                    ? 'bg-[#e3f4f1] text-[#1a1a1a]'
                    : 'bg-[#2b2b2b] text-[#b3c5c1] hover:bg-[#3a3a3a]'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))} */}
          </motion.div>
          <AnimatePresence>
            <motion.div 
              className="flex flex-wrap justify-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {projectsData
                .filter((project) => filter === 'todos' || project.category === filter)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
              containerRef={galleryRef}
            />
          )}
        </AnimatePresence>
      </div>
    )
  }
  
  function ProjectCard({ project, onClick }) {
    return (
      <motion.div 
        className="bg-[#2b2b2b] rounded-lg overflow-hidden shadow-lg w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] max-w-md"
        whileHover={{ y: -10, transition: { duration: 0.3 } }}
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={onClick}
      >
        <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-[#e3f4f1] mb-2">{project.title}</h3>
          <p className="text-[#b3c5c1] mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <motion.span 
                key={index} 
                className="flex items-center px-2 py-1 bg-[#1a1a1a] text-[#e3f4f1] text-xs font-medium rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {React.createElement(tech.icon, { className: "mr-1" })}
                {tech.name}
              </motion.span>
            ))}
          </div>
          <motion.button
            className="mt-2 px-4 py-2 bg-[#e3f4f1] text-[#1a1a1a] rounded hover:bg-[#ffffff] transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Detalles
          </motion.button>
        </div>
      </motion.div>
    )
  }

  function ProjectModal({ project, onClose, containerRef }) {
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, []);
  
    return (
      <motion.div 
        className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          top: containerRef.current ? containerRef.current.offsetTop : 0,
          height: containerRef.current ? `${containerRef.current.offsetHeight}px` : '100%'
        }}
      >
        <motion.div 
          className="bg-[#2b2b2b] rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
          initial={{ scale: 0.9, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 50, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 500 }}
        >
          <div className="flex justify-end">
            <motion.button 
              onClick={onClose} 
              className="text-[#b3c5c1] hover:text-[#e3f4f1] transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <XIcon size={24} />
            </motion.button>
          </div>
          <motion.h3 
            className="text-3xl font-bold text-[#e3f4f1] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h3>
          <motion.video 
            className="w-full mb-4 rounded-lg" 
            autoPlay 
            muted 
            loop
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
          <motion.p 
            className="text-[#b3c5c1] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {project.description}
          </motion.p>
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-2 text-[#e3f4f1]">Tecnologías utilizadas:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <motion.span 
                  key={index} 
                  className="flex items-center px-3 py-1 bg-[#1a1a1a] text-[#e3f4f1] text-sm font-medium rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {React.createElement(tech.icon, { className: "mr-2" })}
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h4 className="text-lg font-semibold mb-2 text-[#e3f4f1]">Características:</h4>
            <ul className="list-disc list-inside text-[#b3c5c1]">
              {project.features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-2 text-[#e3f4f1]">Galería:</h4>
            <div className="relative">
              <motion.div 
                className="w-full h-[400px] flex items-center justify-center bg-[#1a1a1a] rounded-lg overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.img 
                  key={currentImage}
                  src={project.gallery[currentImage]} 
                  alt={`${project.title} - Imagen ${currentImage + 1}`} 
                  className="max-w-full max-h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <motion.button 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={() => setCurrentImage((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1))}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={() => setCurrentImage((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1))}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
            <div className="flex justify-center mt-4">
              {project.gallery.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-3 h-3 mx-1 rounded-full ${index === currentImage ? 'bg-[#e3f4f1]' : 'bg-[#b3c5c1]'}`}
                  onClick={() => setCurrentImage(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[#e3f4f1] text-[#1a1a1a] rounded hover:bg-[#ffffff] transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Proyecto <ExternalLink size={20} className="ml-2" />
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[#e3f4f1] text-[#1a1a1a] rounded hover:bg-[#ffffff] transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Código <Github size={20} className="ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    )
  }