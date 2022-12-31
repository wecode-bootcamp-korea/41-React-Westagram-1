import React from 'react';
import '../Main.scss';

const Nav = () => {
  return (
    <div className="Main">
      <header className="header">
        <div className="header-first">
          <img
            className="header-logo"
            alt="logo"
            src="./images/41_dahye/instagram.png"
          />
          <h1 className="header-title">Instagram</h1>
        </div>
        <div className="header-second">
          <input className="header-search" type="text" placeholder="검색" />
        </div>
        <div className="header-third">
          <img
            className="header-compass"
            alt="compass"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          />
          <img
            className="header-heart"
            alt="heart"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
          <img
            className="header-mypage"
            alt="mypage"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          />
        </div>
      </header>
    </div>
  );
};

export default Nav;
