import React from 'react';

import Layout from '../components/Layout.jsx';
import Disciplinas from '../components/disciplinas.jsx';
import { useI18n } from '../i18n/index.js';

export default function DisciplinasPage() {
  const { t } = useI18n();

  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold text-brand">{t.disciplinas.title}</h1>
        <p className="mt-2 max-w-2xl text-slate-600">{t.disciplinas.intro}</p>
        <div className="mt-8">
          <Disciplinas />
        </div>
      </div>
    </Layout>
  );
}
