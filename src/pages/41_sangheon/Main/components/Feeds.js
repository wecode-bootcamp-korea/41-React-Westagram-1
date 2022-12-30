import React, { useEffect, useState } from 'react';
import Feed from './Feed';

function Feeds() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('data/data_sangheon.json')
      .then(res => res.json())
      .then(data => setFeeds(data));
  }, []);

  return (
    <div className="feeds">
      {feeds.map(feed => {
        const { id } = feed;
        return <Feed key={id} data={feed} />;
      })}
    </div>
  );
}

export default Feeds;
