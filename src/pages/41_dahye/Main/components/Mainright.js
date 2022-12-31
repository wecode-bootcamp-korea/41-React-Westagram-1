import React from 'react';
import Aside from './Aside';
import '../Main.scss';

const Mainright = () => {
  return (
    <div className="main-right">
      <div className="account">
        <img
          className="account-img"
          alt="profile-img"
          src="./images/41_dahye/wecode_logo.png"
        />
        <div className="account-text">
          <p className="account-text-1">"wecode_bootcamp"</p>
          <p className="account-text-2">"WeCode|위코드"</p>
        </div>
      </div>

      <div className="story-box">
        <div className="story-title">
          <p>스토리</p>
          <p class="font-bold">모두보기</p>
        </div>
        <div className="story-account-1">
          <img
            className="story-account-img"
            alt="profile-img"
            src="./images/41_dahye/wecode_logo.png"
          />
          <div className="story-account-text">
            <p className="story-account-text-1">wecode_bootcamp</p>
            <p className="story-account-text-2">WeCode|위코드</p>
          </div>
        </div>
        <div className="story-account-1">
          <img
            className="story-account-img"
            alt="profile-img"
            src="./images/41_dahye/wecode_logo.png"
          />
          <div className="story-account-text">
            <p className="story-account-text-1">wecode_bootcamp</p>
            <p className="story-account-text-2">WeCode|위코드</p>
          </div>
        </div>
        <div className="story-account-1">
          <img
            className="story-account-img"
            alt="profile-img"
            src="./images/41_dahye/wecode_logo.png"
          />
          <div className="story-account-text">
            <p className="story-account-text-1">wecode_bootcamp</p>
            <p className="story-account-text-2">WeCode|위코드</p>
          </div>
        </div>
      </div>
      <Aside />
    </div>
  );
};

export default Mainright;
