import React, { Suspense, lazy, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

import Layout from '../components/Layout.jsx';
import { button, link } from '../components/styles.js';
import { useI18n } from '../i18n/index.js';

// Artigos sobre a matemática dos jogos. Carregados sob demanda,
// para não pesar na página principal.
const ARTICLES = {
  'racha-cuca': { game: 'puzzle', Body: lazy(() => import('../articles/rachaCuca.jsx')) },
  'torres-de-hanoi': { game: 'hanoi', Body: lazy(() => import('../articles/hanoi.jsx')) },
  nim: { game: 'nim', Body: lazy(() => import('../articles/nim.jsx')) },
  'painel-de-luzes': { game: 'lights', Body: lazy(() => import('../articles/painelLuzes.jsx')) },
};

export default function ArticlePage({ id }) {
  const { t, lang, to } = useI18n();
  const { game, Body } = ARTICLES[id];
  const g = t.games;
  const a = g[game].article;

  // Ao chegar pelo link do card, começa a leitura do topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Layout title={a.title} description={a.lead}>
      <article className="mx-auto max-w-3xl">
        <Link to={to('/jogos')} className={`${link} inline-flex items-center gap-2 text-sm`}>
          <FaArrowLeft aria-hidden="true" /> {g.back}
        </Link>

        <header className="mt-6">
          <p className="text-sm font-semibold tracking-wide text-clay-dark uppercase">{g[game].title}</p>
          <h1 className="mt-1 text-3xl font-bold text-brand sm:text-4xl">{a.title}</h1>
          <p className="mt-3 text-lg text-slate-600">{a.lead}</p>
        </header>

        <Suspense fallback={<p className="mt-10 text-slate-500">{g.loading}</p>}>
          <Body lang={lang} />
        </Suspense>

        <div className="mt-14 border-t border-slate-200 pt-6">
          <Link to={to('/jogos')} className={button}>
            {g.play}
          </Link>
        </div>
      </article>
    </Layout>
  );
}
