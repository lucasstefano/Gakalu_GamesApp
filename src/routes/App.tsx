import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/Login/Login';
import RegistroPage from '../pages/Registro/Registro';
import InicioPage from '../pages/Inicio/inicio';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/home" element={<InicioPage/>} />
      </Routes>
    </Router>
  );
};

export default App;