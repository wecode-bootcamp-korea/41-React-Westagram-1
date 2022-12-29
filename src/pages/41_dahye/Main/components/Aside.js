import React from 'react';
import { ASIDE_DATA } from './Aside_data';
import '../Main.scss';

const Aside = () => {
  return (
    <div className="aside">
      <ul>
        {ASIDE_DATA.map(item => {
          return (
            <span className="asideData" key={item.id}>
              {item.data}
            </span>
          );
        })}
      </ul>
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
  );
};

export default Aside;
