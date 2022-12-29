// import React, { useState } from 'react';
import './Main.scss';
// import asideData from './AsideData';
import Article from './Components/Article';
import MainRight from './Components/MainRight';
// import { ASIDE_DATA } from './AsideData';

function MainDagyeong() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar_left">
          <img
            className="icon"
            src="./images/41_dagyeong/instagram.png"
            alt="instagram logo"
          />
          <span>Westagram</span>
        </div>
        <input type="text" placeholder="검색" className="navbar_search" />
        <div className="navbar_icons">
          <img
            className="icon"
            src="./images/41_dagyeong/explore.png"
            alt="explore"
          />
          <img
            className="icon"
            src="./images/41_dagyeong/heart.png"
            alt="heart"
          />
          <img
            className="icon"
            src="./images/41_dagyeong/profile.png"
            alt="profile"
          />
        </div>
      </nav>
      <main>
        <Article />
        <MainRight />
      </main>
    </>
  );
}

export default MainDagyeong;

// const ASIDE = [
//   { id: 1, name: '소개' },
//   { id: 2, name: '도움말' },
//   { id: 3, name: '홍보센터' },
//   { id: 4, name: 'API' },
//   { id: 5, name: '채용 정보' },
//   { id: 6, name: '개인정보처리방침' },
//   { id: 7, name: '약관' },
//   { id: 8, name: '위치' },
//   { id: 9, name: '언어' },
// ];
