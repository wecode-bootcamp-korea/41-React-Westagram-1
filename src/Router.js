import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hi from './pages/41_jiyeon/Login/Login';
import MainDagyeong from './pages/41_dagyeong/Main/Main';
import MainDahye from './pages/41_dahye/Main/Main';
import MainSangheon from './pages/41_sangheon/Main/Main';
import MainHwanseong from './pages/41_hwanseong/Main/Main';
import Bye from './pages/41_jiyeon/Main/Main';
import LoginDagyeong from './pages/41_dagyeong/Login/Login';
import LoginDahye from './pages/41_dahye/Login/Login';
import LoginSangheon from './pages/41_sangheon/Login/Login';
import LoginHwanseong from './pages/41_hwanseong/Login/Login';
import LoginJiyeon from './pages/41_jiyeonSeo/Login/Login_re';
import MainJiyeon from './pages/41_jiyeonSeo/Main/Main_re';
import SignUpJiyeon from './pages/41_jiyeonSeo/SignUp/SignUp';
import Nav from './components/Nav/Nav';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/main_dagyeong" element={<MainDagyeong />} />
        <Route path="/main_dahye" element={<MainDahye />} />
        <Route path="/main_hwanseong" element={<MainHwanseong />} />
        <Route path="/main_jiyeon" element={<Bye />} />
        <Route path="/main_sangheon" element={<MainSangheon />} />
        <Route path="/login_dagyeong" element={<LoginDagyeong />} />
        <Route path="/login_dahye" element={<LoginDahye />} />
        <Route path="/login_hwanseong" element={<LoginHwanseong />} />
        <Route path="/login_sangheon" element={<LoginSangheon />} />
        <Route path="/login_jiyeon" element={<Hi />} />
        <Route path="/login_jiyeonSeo" element={<LoginJiyeon />} />
        <Route path="/main_jiyeonSeo" element={<MainJiyeon />} />
        <Route path="/signup_jiyeonSeo" element={<SignUpJiyeon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
