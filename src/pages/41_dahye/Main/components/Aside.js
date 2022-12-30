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
    </div>
  );
};

export default Aside;
