import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Title from './components/app';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
