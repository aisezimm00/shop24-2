import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryComponent from './components/CategoryComponent/CategoryComponent';
import Header from './components/Header/Header';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/category/:category" element={<CategoryComponent category="electronics" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
