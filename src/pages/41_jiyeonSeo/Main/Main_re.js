import React from 'react';
import './Main_re.scss';
import '../styles/common.scss';
import '../styles/variables.scss';
import Nav from './MainComponents/Nav';
import Content from './MainComponents/Content';
import MainRight from './MainComponents/MainRight';

function Main() {
  return (
    <div className="wrapMain">
      <Nav />
      <main>
        <Content />
        <MainRight />
      </main>
    </div>
  );
}

export default Main;
