import React from 'react';
import WrapComments from './comments/WrapComments';

export default function Feed({
  data: { id, username, thumbUrl, imgUrl, comments },
}) {
  return (
    <div className="feed">
      <div className="wrap-profile">
        <div className="box-user">
          <span className="thumb-img">
            <img src={thumbUrl} alt="" />
          </span>
          <span className="box-cont">
            <strong className="tit-user">{username}</strong>
          </span>
        </div>
        <button className="btn-more">
          <i className="fa fa-solid fa-ellipsis" />
        </button>
      </div>
      <div className="wrap-img">
        <img src={imgUrl} alt="" />
      </div>
      <WrapComments comments={comments} />
    </div>
  );
}
