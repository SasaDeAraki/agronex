import { useState } from 'react';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router >
        <div>
          <Routes >
            <Route exact path='/' Component={ Home } />
            <Route path='/sobre' Component={ Sobre } />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App
