import React from 'react';
import Nav from './components/Nav.js';
import Feeds from './components/Feeds.js';
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
