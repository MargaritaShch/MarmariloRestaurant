import React from 'react';
import './App.css';
import AboutCompany from './AboutCompany/AboutCompany';
import ProProduct from './ProProduct/ProProduct';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageAboutCompany from './Pages/PageAboutCompany';
import Contact from './Contact/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageAboutCompany />} />
        <Route path="/ProProduct" element={<ProProduct/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/AboutCompany" element={<AboutCompany />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
