import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import DisciplinasPage from './pages/DisciplinasPage.jsx';
import PuzzlesPage from './pages/PuzzlesPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/disciplinas" element={<DisciplinasPage />} />
        <Route path="/jogos" element={<PuzzlesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
