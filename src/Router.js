import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hi from './pages/41_jiyeon/Login/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dagyeong" element={<Title />} />
        <Route path="/dahye" element={<Title />} />
        <Route path="/hwanseong" element={<Title />} />
        <Route path="/jiyeon" element={<Hi />} />
        <Route path="/sangheon" element={<Title />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
