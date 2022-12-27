import React from 'react';
import Nav from './Nav.js';
import Feeds from './Feeds.js';
import './Main.scss';

function Main() {
  return (
    <div className="Main">
      <Nav />
      <Feeds />
    </div>
  );
}

export default Main;
