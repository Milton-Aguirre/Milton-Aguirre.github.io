import React from 'react';
import './App.css';
import { FaFacebook, FaInstagram, FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';
import Contact from './components/contacts';
import Material from './components/material';
import Portfolio from './components/portfolio';
import LinksSection from './components/links';

function App() {
  return (
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
        <a href="#events">Eventos</a>
        <a href="#links">Links</a>
        <a href="#portfolio">Portfólio</a>
        <a href="#material">Material</a>
      </nav>
      <div className="container">
        <main className="main">

          <div>
            <section className="section">
              <h2 className="sectionTitle">Biografia</h2>
              <div className="nColumnSection">
                <div className="imageColumn">
                  <img src={`${process.env.PUBLIC_URL}/images/Milton.jpeg`} alt="Personal Photo" className="image" />
                </div>
                <div className="textColumn">
                  <p>
                    <strong>Milton Aguirre</strong> é formado em Matemática e possui mestrado na mesma área, 
                    além de atuar como cientista de dados. Com um sólido background técnico, 
                    também possui o título de Técnico em Instalações Elétricas. Além disso, 
                    é especializado em Ensino de Educação a Distância, combinando conhecimentos 
                    acadêmicos com experiência prática em tecnologia e educação. Seu trabalho é 
                    marcado pela aplicação de métodos matemáticos avançados para resolver 
                    problemas complexos e pela paixão por compartilhar conhecimento em sala de aula e através de 
                    plataformas digitais.
                  </p>
                </div>
              </div>
            </section>

            <section id="events">
              <h2 className="sectionTitle">Eventos</h2>
              <h2 className='subSectionTitle'>Próximos</h2>
                <div className="nColumnSection">
                  <div className="leftColumnEvents">
                    <p>A seguir encontrará uma lista de eventos matemáticos que serão realizados próximamente.</p>
                    <ul className="iconsEvents">
                      <li><a className="link" href="" target="_blank" rel="noopener noreferrer">ISAACS Congress 2029</a></li>
                    </ul>
                  </div>
                  <div className="rightColumnEvents">
                    <img src={`${process.env.PUBLIC_URL}/Logo_site_192.png`} width="200" height="200" alt="Logo Pessoal" className="image-Logo_site_192" />
                  </div>
                </div>
              <h2 className='subSectionTitle'>Histórico</h2>
                <div className="nColumnSection">
                  <div className="leftColumnEvents">
                    <p>Histórico de eventos que foram realizados nos últios anos.</p>
                    <ul className="iconsEvents">
                      <li><a className="link" href="https://sites.google.com/view/math08conference" target="_blank" rel="noopener noreferrer">Congreso ICMAM Latin América 2020</a></li>
                      <li><a className="link" href="https://sites.google.com/view/matematicasunivalleicmam2022/home" target="_blank" rel="noopener noreferrer">Congreso ICMAM Latin América 2022</a></li>
                      <li><a className="link" href="https://sites.google.com/view/icmam2024/home" target="_blank" rel="noopener noreferrer">Congreso ICMAM Latin América 2024</a></li>
                      <li><a className="link" href="https://sites.google.com/view/isaac-icmam-conference-4-women/" target="_blank" rel="noopener noreferrer">ISAACS-ICMAM Conference for Women in Mathematics 2024</a></li>
                    </ul>
                  </div>
                  <div className="rightColumnEvents">
                    <img src={`${process.env.PUBLIC_URL}/Logo_site_192.png`} width="200" height="200" alt="Logo Pessoal" className="image-Logo_site_192" />
                  </div>
                </div>
            </section>

            <section id="links" className="section">
              <h2 className="sectionTitle">Links</h2>
              <LinksSection />
            </section>

            <section id="portfolio">
              <h2 className="sectionTitle">Portfólio de Projetos</h2>
              <Portfolio />
            </section>

            <section id="material">
              <h2 className="sectionTitle">Material</h2>
              <Material />
            </section>

            <section>
              <h2 className="sectionTitle">Comentários</h2>
              <Contact />
            </section>
            
            <section>
              <h2 className="sectionTitle">Visitantes</h2>
              <h5 style={{ textAlign: "center", marginTop: "20px", fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}>
                Agradeço com grande carinho as visitas neste site das diferentes pessoas do mundo
              </h5>
              <div className="bamdeiras">
               <a href="https://info.flagcounter.com/vHkJ">
                 <img 
                   src="https://s01.flagcounter.com/countxl/vHkJ/bg_FFFFFF/txt_000000/border_000000/columns_4/maxflags_12/viewers_3/labels_0/pageviews_0/flags_0/percent_1/" 
                   alt="Flag Counter" 
                   border="0"
                 />
               </a>
              </div> 
            </section>
          </div>
        </main>
        
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
  );
}

export default App;
