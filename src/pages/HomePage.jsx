import React from 'react';

import Layout from '../components/Layout.jsx';
import Section from '../components/Section.jsx';
import Biography from '../components/biography.jsx';
import Events from '../components/events.jsx';
import LinksSection from '../components/links.jsx';
import Portfolio from '../components/portfolio.jsx';
import Contact from '../components/contacts.jsx';
import { card } from '../components/styles.js';
import { useI18n } from '../i18n/index.js';

function HomePage() {
  const { t } = useI18n();

  return (
    <Layout>
      <Biography />
      <Events />

      <Section id="links" title={t.links.title}>
        <LinksSection />
      </Section>

      <Section id="titulos" title={t.titles.title}>
        <Portfolio />
      </Section>

      <Section id="contato" title={t.contact.title}>
        <Contact />
      </Section>

      <Section id="visitantes" title={t.visitors.title}>
        <div className={`${card} p-6 text-center`}>
          <p className="text-lg font-medium text-slate-700">{t.visitors.thanks}</p>
          <a href="https://info.flagcounter.com/vHkJ" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
            <img
              src="https://s01.flagcounter.com/countxl/vHkJ/bg_FFFFFF/txt_000000/border_000000/columns_4/maxflags_12/viewers_3/labels_0/pageviews_0/flags_0/percent_1/"
              alt={t.visitors.counterAlt}
              className="mx-auto"
            />
          </a>
        </div>
      </Section>
    </Layout>
  );
}

export default HomePage;
