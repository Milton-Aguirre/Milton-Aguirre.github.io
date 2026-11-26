import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

import { LANGS } from './i18n/index.js';
import HomePage from './pages/HomePage.jsx';
import DisciplinasPage from './pages/DisciplinasPage.jsx';
import PuzzlesPage from './pages/PuzzlesPage.jsx';
import ArticlePage from './pages/ArticlePage.jsx';

const pages = [
  { path: '', element: <HomePage /> },
  { path: 'home', element: <HomePage /> },
  { path: 'disciplinas', element: <DisciplinasPage /> },
  { path: 'jogos', element: <PuzzlesPage /> },
  { path: 'jogos/racha-cuca', element: <ArticlePage id="racha-cuca" /> },
  { path: 'jogos/torres-de-hanoi', element: <ArticlePage id="torres-de-hanoi" /> },
  { path: 'jogos/nim', element: <ArticlePage id="nim" /> },
  { path: 'jogos/painel-de-luzes', element: <ArticlePage id="painel-de-luzes" /> },
];

// Gera as rotas de cada idioma: /, /disciplinas, /es, /es/disciplinas, /en, ...
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {LANGS.flatMap((lang) =>
          pages.map((page) => (
            <Route
              key={`${lang.code}-${page.path}`}
              path={`${lang.prefix}/${page.path}`}
              element={page.element}
            />
          ))
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
