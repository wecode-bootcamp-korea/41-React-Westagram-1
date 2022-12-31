import React, { useState, useEffect } from 'react';
// import Comment from '../components/Comment.js';
import Feed from './Feed.js';
import Mainright from './Mainright.js';
import '../Main.scss';

const Feeds = () => {
  const [userInfoList, setUserInfoList] = useState([]);

  useEffect(() => {
    fetch('data/userInfoList.json')
      .then(response => response.json())
      .then(result => setUserInfoList(result));
  }, []);

  return (
    <main className="main">
      <div className="feeds">
        {userInfoList.map(value => {
          return <Feed userinfo={value} />;
        })}
      </div>
      <Mainright />
    </main>
  );
};

export default Feeds;
