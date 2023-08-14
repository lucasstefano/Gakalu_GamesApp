import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginPage from './pages/Login/Login';
import RegistroPage from './pages/Registro/Registro';
import InicioPage from './pages/Inicio/inicio';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes> {/* Use the Routes component */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroPage/>} />
        <Route path="/home" element={<InicioPage/>} />
      </Routes>
    </BrowserRouter>
     
  </React.StrictMode>
);

reportWebVitals();

