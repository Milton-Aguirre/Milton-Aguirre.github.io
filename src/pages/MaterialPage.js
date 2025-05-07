import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Material from '../components/material';

export default function MaterialPage() {
  return (
    <div className="container">
      <div className="App">
        <header className="header">
          <div className="header-content">
            <img src={`${process.env.PUBLIC_URL}/Logo_site_192.png`} alt="Logo" className="logo" />
            <div>
              <h1>Milton Aguirre</h1>
              <p>Formação em Matemática</p>
            </div>
          </div>
        </header>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/material">Material</Link>
          <Link to="/jogos">Jogos</Link>
        </nav>

        <div className="container">
          <h2 className="sectionTitle">Material</h2>
          <Material />
        </div>

        <footer className="footer">
          <aside className="sidebar">
            <div className="socialMedia">
              <a href="https://www.facebook.com/cofradia.academica.1" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={40} className="socialIcon" />
              </a>
              <a href="https://www.instagram.com/icmam_math_conference?igsh=eWx2M3FlYWxucTJ0" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={40} className="socialIcon" />
              </a>
              <a href="https://www.youtube.com/@conferenciainternacionalma6791" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={40} className="socialIcon" />
              </a>
              <a href="https://www.linkedin.com/in/milton-aguirre-mat-52300751/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={40} className="socialIcon" />
              </a>
              <a href="https://github.com/Milton-Aguirre" target="_blank" rel="noopener noreferrer">
                <FaGithub size={40} className="socialIcon" />
              </a>
            </div>
          </aside>
          <p>&copy; 2024 Site Pessoal. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}