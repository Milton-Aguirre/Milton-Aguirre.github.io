import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import EightPuzzle from '../puzzles/rachaCuca';

export default function PuzzlesPage() {
  return (
    <div className="main">
      <div className="container">
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

        <h2 className="sectionTitle">Jogos</h2>
          <h2 className='subSectionTitle'>Racha Cuca</h2>
            <div className="nColumnSection">
              <div className="rightColumnEvents">
                <EightPuzzle />
              </div>
              <div className="leftColumnEvents">
                <p>Este jogo consiste em mover uma peça por vez para o espaço em branco, com o objetivo de 
                  organizar os números em ordem crescente.
                </p>
              </div>
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
