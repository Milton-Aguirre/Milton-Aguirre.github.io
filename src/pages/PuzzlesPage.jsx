import React from 'react';

import Layout from '../components/Layout.jsx';
import { card } from '../components/styles.js';
import RachaCuca from '../puzzles/rachaCuca.jsx';
import HanoiGame from '../puzzles/hanoiTower.jsx';

const Jogo = ({ title, regra, objetivo, children }) => (
  <article className={`${card} flex flex-col p-6`}>
    <h2 className="text-xl font-bold text-brand">{title}</h2>
    <dl className="mt-3 space-y-2 text-sm text-slate-700">
      <div>
        <dt className="inline font-semibold">Regra: </dt>
        <dd className="inline">{regra}</dd>
      </div>
      <div>
        <dt className="inline font-semibold">Objetivo: </dt>
        <dd className="inline">{objetivo}</dd>
      </div>
    </dl>
    <div className="mt-6 flex flex-1 items-center justify-center">{children}</div>
  </article>
);

export default function PuzzlesPage() {
  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold text-brand">Jogos</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Quebra-cabeças clássicos com um toque de matemática.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Jogo
            title="Racha Cuca"
            regra="deslocar uma peça vertical ou horizontalmente para o espaço em branco."
            objetivo="organizar os números em ordem crescente, começando no canto superior esquerdo."
          >
            <RachaCuca />
          </Jogo>

          <Jogo
            title="Torres de Hanói"
            regra="um disco maior nunca pode ficar sobre um menor."
            objetivo="mover todos os discos da torre A para a torre C, usando a torre B como auxiliar."
          >
            <HanoiGame />
          </Jogo>
        </div>
      </div>
    </Layout>
  );
}
