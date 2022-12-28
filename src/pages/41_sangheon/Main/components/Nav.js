import React from 'react';
import SearchBox from './SearchBox';
import { NAV_UTIL_LIST } from '../../uiData';

function Nav() {
  return (
    <nav id="nav">
      <div className="inner-nav">
        <h1 className="tit_logo">
          <i className="fa fa-brands fa-instagram" />
          <span className="ver-line" />
          <span className="title">westagram</span>
        </h1>

        <SearchBox />

        <div className="box-util">
          {NAV_UTIL_LIST.map(item => {
            return (
              <a
                key={item.id}
                href="#none"
                className={`link-${item.className}`}
              >
                <img src={item.imgUrl} alt="" />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
