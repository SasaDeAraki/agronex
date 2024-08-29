import { useState } from 'react';
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Suporte from './pages/Suporte/Suporte';

function App() {
  return (
    <div>
      <Router >
        <div>
          <Routes >
            <Route exact path='/' Component={ Login } />
            <Route path='/home' Component={ Home } />
            <Route path='/sobre' Component={ Sobre } />
            <Route path='/suporte' Component={ Suporte } />
            <Route path='/cadastro' Component={ Cadastro }/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App