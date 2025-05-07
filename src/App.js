import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MaterialPage from './pages/MaterialPage';
import PuzzlesPage from './pages/PuzzlesPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/material" component={MaterialPage} />
        <Route path="/jogos" component={PuzzlesPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
