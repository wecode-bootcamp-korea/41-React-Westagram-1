import React from 'react';
import Nav from './Nav.js';
import Feed from './Feed.js';
import './Main.scss';

function Main() {
  return (
    <div className="Main">
      <Nav />
      <Feed />
    </div>
  );
}

export default Main;
