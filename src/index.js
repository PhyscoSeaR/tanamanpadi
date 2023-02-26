import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';
import Detail from './pages/detail';
import About from './pages/about';
import Scan from './pages/scan';
import Bacterial from './pages/detail/bacterial';
import Brown from './pages/detail/brown';
import Blast from './pages/detail/blast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Scan />}>
          <Route index element={<Scan />} />
        </Route>
        <Route path="Detail" element={<Detail />}>
            <Route index element={<Detail />} />
        </Route>
        <Route path="Detail/bacterial" element={<Bacterial />} />
        <Route path="Detail/brown" element={<Brown />} />
        <Route path="Detail/blast" element={<Blast />} />
        <Route path="About" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);