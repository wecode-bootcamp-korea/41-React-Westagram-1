import React, { useState } from 'react';
// import Comment from '../components/Comment.js';
import Feed from './Feed.js';
import Mainright from './Mainright.js';
import '../Main.scss';

const Feeds = () => {
  return (
    <main className="main">
      <Feed />
      <Mainright />
    </main>
  );
};

export default Feeds;
