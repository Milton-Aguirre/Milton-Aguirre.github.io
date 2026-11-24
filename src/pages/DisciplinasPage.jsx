import React from 'react';

import Layout from '../components/Layout.jsx';
import Disciplinas from '../components/disciplinas.jsx';

export default function DisciplinasPage() {
  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold text-brand">Disciplinas</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Materiais de estudo com exercícios resolvidos das disciplinas de matemática e ciência de dados.
        </p>
        <div className="mt-8">
          <Disciplinas />
        </div>
      </div>
    </Layout>
  );
}
