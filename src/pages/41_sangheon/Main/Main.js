import React from 'react';
import './Main.scss';
import Nav from './components/Nav';
import Feeds from './components/Feeds';
import Aside from './components/Aside';

export default function MainSangheon() {
  return (
    <>
      <Nav />
      <main id="main" className="main">
        <Feeds />
        <Aside />
      </main>
    </>
  );
}
