import { useState } from 'react';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import LoginCadastro from './pages/LoginCadastro/LoginCadastro';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Suporte from './pages/Suporte/Suporte';

function App() {
  return (
    <div>
      <Router >
        <div>
          <Routes >
            <Route exact path='/' Component={ LoginCadastro } />
            <Route path='/home' Component={ Home } />
            <Route path='/sobre' Component={ Sobre } />
            <Route path='/suporte' Component={ Suporte } />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App