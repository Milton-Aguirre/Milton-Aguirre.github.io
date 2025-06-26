import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import MaterialPage from './pages/MaterialPage.jsx';
import PuzzlesPage from './pages/PuzzlesPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/material" element={<MaterialPage />} />
        <Route path="/jogos" element={<PuzzlesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
