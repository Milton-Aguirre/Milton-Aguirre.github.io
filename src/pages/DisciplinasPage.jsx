import React from 'react';

import Layout from '../components/Layout.jsx';
import Disciplinas from '../components/disciplinas.jsx';

export default function DisciplinasPage() {
  return (
    <Layout>
      <h2 className="sectionTitle">Disciplinas</h2>
      <Disciplinas />
    </Layout>
  );
}
