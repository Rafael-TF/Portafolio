import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../Styles/Navbar.css';

const Navbar = ({ setCurrentPage, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
    setCurrentPage(id);
  };

  const navItems = [
    { name: 'Inicio', id: 'home' },
    { name: 'Sobre mí', id: 'about' },
    { name: 'Habilidades', id: 'skills' },
    { name: 'Proyectos', id: 'projects' },
    { name: 'Servicios', id: 'services' },
    { name: 'Contacto', id: 'contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${currentPage !== 'home' ? 'not-home' : ''}`}>
      <div className="logo" onClick={() => scrollToSection('home')}>
        <span className="logo-r">R</span>T
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-logo">
          <span className="logo-r">R</span>T
        </div>
        {isMenuOpen && (
          <button className="close-menu" onClick={closeMenu}>
            <X size={24} />
          </button>
        )}
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => scrollToSection(item.id)}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;