import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight, FaPlay, FaImage } from 'react-icons/fa';
import '../Styles/ProjectDetails.css';

const ProjectDetails = ({ project, onClose }) => {
    const [activeTab, setActiveTab] = useState('description');
    const [activeMediaTab, setActiveMediaTab] = useState('video');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const videoRef = useRef(null);
    const detailsRef = useRef(null);
    const lightboxRef = useRef(null);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                if (isLightboxOpen) {
                    setIsLightboxOpen(false);
                } else {
                    onClose();
                }
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isLightboxOpen, onClose]);

    useEffect(() => {
        if (videoRef.current && activeMediaTab === 'video') {
            videoRef.current.play().catch(error => console.log("Autoplay prevented:", error));
        }
    }, [activeMediaTab]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (lightboxRef.current && !lightboxRef.current.contains(event.target)) {
                setIsLightboxOpen(false);
            }
        };

        if (isLightboxOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isLightboxOpen]);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.gallery.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.gallery.length) % project.gallery.length);
    };

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setIsLightboxOpen(true);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleMediaTabChange = (tab) => {
        setActiveMediaTab(tab);
    };

    return (
        <motion.div 
            className="project-details"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            ref={detailsRef}
        >
            <motion.button 
                className="close-button" 
                onClick={onClose} 
                aria-label="Close details"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaTimes />
            </motion.button>
            <div className="project-details-content">
                <motion.div 
                    className="project-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2>{project.title}</h2>
                    <div className="project-actions">
                        <motion.a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="view-project-button"
                            whileHover={{ scale: 1.05, backgroundColor: "#c7dad9" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Ver Proyecto <FaExternalLinkAlt />
                        </motion.a>
                        {project.github && (
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub /> Ver Código
                            </motion.a>
                        )}
                    </div>
                </motion.div>
                
                <motion.div 
                    className="project-media"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="media-tabs">
                        <motion.button 
                            className={`media-tab ${activeMediaTab === 'video' ? 'active' : ''}`}
                            onClick={() => handleMediaTabChange('video')}
                            aria-label="Show video"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaPlay /> Video
                        </motion.button>
                        <motion.button 
                            className={`media-tab ${activeMediaTab === 'gallery' ? 'active' : ''}`}
                            onClick={() => handleMediaTabChange('gallery')}
                            aria-label="Show gallery"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaImage /> Galería
                        </motion.button>
                    </div>
                    <AnimatePresence mode="wait">
                        {activeMediaTab === 'video' && (
                            <motion.div 
                                className="video-container"
                                key="video"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <video ref={videoRef} src={project.video} controls className="project-video" />
                            </motion.div>
                        )}
                        {activeMediaTab === 'gallery' && (
                            <motion.div 
                                className="gallery-grid"
                                key="gallery"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                {project.gallery.map((image, index) => (
                                    <motion.div 
                                        key={index} 
                                        className="gallery-item" 
                                        onClick={() => openLightbox(index)}
                                        whileHover={{ scale: 1.05, zIndex: 1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <motion.div 
                    className="project-info"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="info-tabs">
                        {['description', 'features', 'tech'].map((tab) => (
                            <motion.button 
                                key={tab}
                                className={`tab ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => handleTabChange(tab)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {tab === 'description' ? 'Descripción' : 
                                 tab === 'features' ? 'Características' : 'Tecnologías'}
                            </motion.button>
                        ))}
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="tab-content"
                        >
                            {activeTab === 'description' && <p>{project.description}</p>}
                            {activeTab === 'features' && (
                                <ul className="features-list">
                                    {project.features.map((feature, index) => (
                                        <motion.li 
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                            )}
                            {activeTab === 'tech' && (
                                <div className="tech-stack">
                                    {project.technologies.map((tech, index) => (
                                        <motion.div 
                                            key={index} 
                                            className="tech-icon"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <tech.icon />
                                            <span>{tech.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>

            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div 
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div 
                            className="lightbox" 
                            ref={lightboxRef}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                        >
                            <motion.button 
                                className="close-lightbox" 
                                onClick={() => setIsLightboxOpen(false)} 
                                aria-label="Close lightbox"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaTimes />
                            </motion.button>
                            <img src={project.gallery[currentImageIndex]} alt={`${project.title} screenshot ${currentImageIndex + 1}`} />
                            <motion.button 
                                className="lightbox-nav prev" 
                                onClick={prevImage} 
                                aria-label="Previous image"
                                whileHover={{ scale: 1.1, x: -5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaChevronLeft />
                            </motion.button>
                            <motion.button 
                                className="lightbox-nav next" 
                                onClick={nextImage} 
                                aria-label="Next image"
                                whileHover={{ scale: 1.1, x: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FaChevronRight />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ProjectDetails;