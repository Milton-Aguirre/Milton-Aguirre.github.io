import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import Layout from '../components/Layout.jsx';
import Biography from '../components/biography.jsx';
import Events from '../components/events.jsx';
import LinksSection from '../components/links.jsx';
import Portfolio from '../components/portfolio.jsx';
import Contact from '../components/contacts.jsx';

// href permite navegar pelo teclado (Tab + Enter)
const scroll = { smooth: true, duration: 500 };

const homeNav = (
  <>
    <ScrollLink to="events" {...scroll} href="#events">Eventos</ScrollLink>
    <ScrollLink to="links" {...scroll} href="#links">Links</ScrollLink>
    <ScrollLink to="portfolio" {...scroll} href="#portfolio">Títulos</ScrollLink>
    <ScrollLink to="contato" {...scroll} href="#contato">Contato</ScrollLink>
    <Link to="/disciplinas">Disciplinas</Link>
    <Link to="/jogos">Jogos</Link>
  </>
);

function HomePage() {
  return (
    <Layout nav={homeNav}>
      <div className="container">
        <Biography />
        <Events />

        <section id="links" className="sectionLinks">
          <h2 className="sectionTitle">Links</h2>
          <LinksSection />
        </section>

        <section id="portfolio">
          <h2 className="sectionTitle">Títulos</h2>
          <Portfolio />
        </section>

        <section id="contato">
          <h2 className="sectionTitle">Contato</h2>
          <Contact />
        </section>

        <section>
          <h2 className="sectionTitle">Visitantes</h2>
          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
            Agradeço com grande carinho as visitas a este site de pessoas de diferentes partes do mundo
          </p>
          <div className="bandeiras">
            <a href="https://info.flagcounter.com/vHkJ" target="_blank" rel="noopener noreferrer">
              <img
                src="https://s01.flagcounter.com/countxl/vHkJ/bg_FFFFFF/txt_000000/border_000000/columns_4/maxflags_12/viewers_3/labels_0/pageviews_0/flags_0/percent_1/"
                alt="Contador de visitantes por país"
              />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default HomePage;
