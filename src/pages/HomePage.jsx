import React from 'react';

import Layout from '../components/Layout.jsx';
import Section from '../components/Section.jsx';
import Biography from '../components/biography.jsx';
import Events from '../components/events.jsx';
import LinksSection from '../components/links.jsx';
import Portfolio from '../components/portfolio.jsx';
import Contact from '../components/contacts.jsx';
import { card } from '../components/styles.js';

function HomePage() {
  return (
    <Layout>
      <Biography />
      <Events />

      <Section id="links" title="Links">
        <LinksSection />
      </Section>

      <Section id="titulos" title="Títulos">
        <Portfolio />
      </Section>

      <Section id="contato" title="Contato">
        <Contact />
      </Section>

      <Section id="visitantes" title="Visitantes">
        <div className={`${card} p-6 text-center`}>
          <p className="text-lg font-medium text-slate-700">
            Agradeço com grande carinho as visitas a este site de pessoas de diferentes partes do mundo.
          </p>
          <a href="https://info.flagcounter.com/vHkJ" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
            <img
              src="https://s01.flagcounter.com/countxl/vHkJ/bg_FFFFFF/txt_000000/border_000000/columns_4/maxflags_12/viewers_3/labels_0/pageviews_0/flags_0/percent_1/"
              alt="Contador de visitantes por país"
              className="mx-auto"
            />
          </a>
        </div>
      </Section>
    </Layout>
  );
}

export default HomePage;
