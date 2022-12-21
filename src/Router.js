import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hi from './pages/41_jiyeon/Login/Login';
import MainDagyeong from './pages/41_dagyeong/Main/Main';
import MainDahye from './pages/41_dahye/Main/Main';
import MainSangheon from './pages/41_sangheon/Main/Main';
import MainHwanseong from './pages/41_hwanseong/Main/Main';
import Nav from './components/Nav/Nav';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/dagyeong" element={<MainDagyeong />} />
        <Route path="/dahye" element={<MainDahye />} />
        <Route path="/hwanseong" element={<MainHwanseong />} />
        <Route path="/jiyeon" element={<Hi />} />
        <Route path="/sangheon" element={<MainSangheon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
