import React from 'react';

import Layout from '../components/Layout.jsx';
import RachaCuca from '../puzzles/rachaCuca.jsx';
import HanoiGame from '../puzzles/hanoiTower.jsx';

export default function PuzzlesPage() {
  return (
    <Layout>
      <h2 className="sectionTitle">Jogos</h2>

      <h3 className="subSectionTitle">Racha Cuca</h3>
      <div className="nColumnSection">
        <div className="rightColumnEvents">
          <RachaCuca />
        </div>
        <div className="leftColumnEvents">
          <p>Regra: deslocar uma peça vertical ou horizontalmente para o espaço em branco.</p>
          <p>Objetivo: organizar os números em ordem crescente, começando no canto superior esquerdo.</p>
        </div>
      </div>

      <h3 className="subSectionTitle">Torres de Hanói</h3>
      <div className="nColumnSection">
        <div className="rightColumnEvents">
          <HanoiGame />
        </div>
        <div className="leftColumnEvents">
          <p>Regra: um disco maior nunca pode ficar sobre um menor.</p>
          <p>Objetivo: mover todos os discos da torre A para a torre C, usando a torre B como auxiliar.</p>
        </div>
      </div>
    </Layout>
  );
}
