import React, { useState } from 'react';

export default function CommentBtnWrap() {
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeBtn = () => {
    setIsLiked(prev => !prev);
  };
  return (
    <div className="box-util">
      <div className="util-left">
        <button className="btn-like" onClick={handleLikeBtn}>
          <i
            className={
              isLiked ? 'fa fa-solid fa-heart' : 'fa fa-regular fa-heart'
            }
          />
        </button>
        <button className="btn-dm">
          <i className="fa fa-light fa-comment" />
        </button>
        <button className="btn-share">
          <i className="fa fa-duotone fa-up-from-bracket" />
        </button>
      </div>
      <button className="btn-mark">
        <i className="fa fa-regular fa-bookmark" />
      </button>
    </div>
  );
}
