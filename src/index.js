import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';
import Detail from './pages/detail';
import About from './pages/about';
import Scan from './pages/scan';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Scan />}>
          <Route index element={<Scan />} />
        </Route>
        <Route path="Detail" element={<Detail />} />
        <Route path="About" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);