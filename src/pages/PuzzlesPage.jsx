import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-router';

import Layout from '../components/Layout.jsx';
import { card, link } from '../components/styles.js';
import { useI18n } from '../i18n/index.js';
import RachaCuca from '../puzzles/rachaCuca.jsx';
import HanoiGame from '../puzzles/hanoiTower.jsx';
import Nim from '../puzzles/nim.jsx';
import PainelLuzes from '../puzzles/painelLuzes.jsx';

const Jogo = ({ title, regra, objetivo, labels, artigo, children }) => (
  <article className={`${card} flex flex-col p-6`}>
    <h2 className="text-xl font-bold text-brand">{title}</h2>
    <dl className="mt-3 space-y-2 text-sm text-slate-700">
      <div>
        <dt className="inline font-semibold">{labels.rule} </dt>
        <dd className="inline">{regra}</dd>
      </div>
      <div>
        <dt className="inline font-semibold">{labels.goal} </dt>
        <dd className="inline">{objetivo}</dd>
      </div>
    </dl>
    <Link to={artigo} className={`${link} mt-4 inline-flex items-center gap-2 self-start text-sm`}>
      <FaBookOpen aria-hidden="true" /> {labels.theory}
    </Link>
    <div className="mt-6 flex flex-1 items-center justify-center">{children}</div>
  </article>
);

export default function PuzzlesPage() {
  const { t, to } = useI18n();
  const g = t.games;

  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold text-brand">{g.title}</h1>
        <p className="mt-2 max-w-2xl text-slate-600">{g.intro}</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Jogo title={g.puzzle.title} regra={g.puzzle.rule} objetivo={g.puzzle.goal} labels={g} artigo={to('/jogos/racha-cuca')}>
            <RachaCuca />
          </Jogo>

          <Jogo title={g.hanoi.title} regra={g.hanoi.rule} objetivo={g.hanoi.goal} labels={g} artigo={to('/jogos/torres-de-hanoi')}>
            <HanoiGame />
          </Jogo>

          <Jogo title={g.nim.title} regra={g.nim.rule} objetivo={g.nim.goal} labels={g} artigo={to('/jogos/nim')}>
            <Nim />
          </Jogo>

          <Jogo
            title={g.lights.title}
            regra={g.lights.rule}
            objetivo={g.lights.goal}
            labels={g}
            artigo={to('/jogos/painel-de-luzes')}
          >
            <PainelLuzes />
          </Jogo>
        </div>
      </div>
    </Layout>
  );
}
