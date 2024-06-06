import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Cv from './pages/Cv';
import Formulaire from './pages/Formulaire';
import Footer from './pages/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className='container mt-20'>
        <header className='mb-5'>
          <nav className='flex justify-end'>
            <NavLink className='mr-3' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to='/'>
              Accueil
            </NavLink>
            <NavLink className='mr-3' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to='/cv'>
              CV
            </NavLink>
            <NavLink className='mr-3' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to='/formulaire'>
              Formulaire
            </NavLink>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cv' element={<Cv />} />
          <Route path='/formulaire' element={<Formulaire />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
