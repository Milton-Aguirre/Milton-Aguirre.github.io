import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const socialLinks = [
  { label: 'Facebook da ICMAM', url: 'https://www.facebook.com/icmam', Icon: FaFacebook },
  { label: 'Instagram da ICMAM', url: 'https://www.instagram.com/icmam_math_conference', Icon: FaInstagram },
  { label: 'YouTube da ICMAM', url: 'https://www.youtube.com/@conferenciainternacionalma6791', Icon: FaYoutube },
  { label: 'LinkedIn de Milton Aguirre', url: 'https://www.linkedin.com/in/milton-aguirre-mat-52300751/', Icon: FaLinkedin },
  { label: 'GitHub de Milton Aguirre', url: 'https://github.com/Milton-Aguirre', Icon: FaGithub },
];

const defaultNav = (
  <>
    <Link to="/">Home</Link>
    <Link to="/disciplinas">Disciplinas</Link>
    <Link to="/jogos">Jogos</Link>
  </>
);

export default function Layout({ nav = defaultNav, children }) {
  return (
    <div className="container">
      <div className="App">
        <header className="header">
          <div className="header-content">
            <img src="/Logo_site_192.png" alt="" className="logo" width="100" height="100" />
            <div>
              <h1>Milton Aguirre</h1>
              <p>Formação em Matemática</p>
            </div>
          </div>
        </header>

        <nav className="nav" aria-label="Navegação principal">
          {nav}
        </nav>

        <main>{children}</main>
      </div>

      <footer className="footer">
        <aside className="sidebar">
          <div className="socialMedia">
            {socialLinks.map((social) => (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                title={social.label}
              >
                <social.Icon size={40} className="socialIcon" aria-hidden="true" />
              </a>
            ))}
          </div>
        </aside>
        <p>&copy; {new Date().getFullYear()} Milton Aguirre. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
