import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import Contact from '../components/contacts.jsx';
import LinksSection from '../components/links.jsx';
import Portfolio from '../components/portfolio.jsx';

function HomePage() {
    return (
      <div className="container">
          <div className="App">
           <header className="header">
             <div className="header-content">
               <img src="/Logo_site_192.png" alt="Logo" className="logo" />
                <div>
                 <h1>Milton Aguirre</h1>
                 <p>Formação em Matemática</p>
               </div>
             </div>
           </header>
           <nav className="nav">
            <ScrollLink to="events" smooth={true} duration={500}>Eventos</ScrollLink>
            <ScrollLink to="links" smooth={true} duration={500}>Links</ScrollLink>
            <ScrollLink to="portfolio" smooth={true} duration={500}>Títulos</ScrollLink>
            <Link to="/material">Material</Link>
            <Link to="/jogos">Jogos</Link>
           </nav>
           <div className="container">
             <main className="main"></main>
        <div>
               <section className="sectionBiografia">
                 <h2 className="sectionTitle">Biografia</h2>
                 <div className="nColumnSection">
                   <div className="imageColumn">
                     <img src="/images/Milton.jpeg" alt="Milton Aguirre" className="image" />
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
                     
                     <p>
                       Em 2020, se juntou a seus companheiros de graduação da Universidad del Valle para criarem 
                       a International Community of Mathematicians from Latin America ICMAM, que mais tarde virou um evento Bienal de grande impacto na comunidade matemática 
                       da America Latina e o Caribe.
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
                       <ul className="linksEvents">
                         <li><a className="link" href="https://isaacmath.org/" target="_blank" onClick={(e) => e.preventDefault()}>
                               ISAACS Congress 2029
                             </a>
                         </li>
                       </ul>
                     </div>
                     <div className="rightColumnEvents">
                       <img src="/Logo_site_192.png" width="200" height="200" alt="Logo Pessoal" className="Logo_site_192" />
                     </div>
                   </div>
                 <h2 className='subSectionTitle'>Histórico</h2>
                   <div className="nColumnSection">
                     <div className="leftColumnEvents">
                       <p>Histórico de eventos que foram realizados nos últios anos.</p>
                       <ul className="linksEvents">
                         <li><a className="link" href="https://sites.google.com/view/math08conference" target="_blank" rel="noopener noreferrer">Congreso ICMAM Latin América 2020</a></li>
                         <li><a className="link" href="https://sites.google.com/view/matematicasunivalleicmam2022/home" target="_blank" rel="noopener noreferrer">Congreso ICMAM Latin América 2022</a></li>
                         <li><a className="link" href="https://sites.google.com/view/icmam2024/home" target="_blank" rel="noopener noreferrer">Congreso ICMAM Latin América 2024</a></li>
                         <li><a className="link" href="https://sites.google.com/view/isaac-icmam-conference-4-women/" target="_blank" rel="noopener noreferrer">ISAACS-ICMAM Conference for Women in Mathematics 2024</a></li>
                       </ul>
                     </div>
                     <div className="rightColumnEvents">
                       <img src="/Logo_site_192.png" width="200" height="200" alt="Logo Pessoal" className="Logo_site_192" />
                     </div>
                   </div>
               </section>
  
               <section id="links" className="sectionLinks">
                 <h2 className="sectionTitle">Links</h2>
                 <LinksSection />
               </section>
  
               <section id="portfolio">
                 <h2 className="sectionTitle">Títulos</h2>
                 <Portfolio />
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
    );
  }

export default HomePage;