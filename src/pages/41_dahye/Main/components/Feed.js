import React, { useState } from 'react';
import Comment from '../components/Comment.js';
import '../Main.scss';

const Feed = ({ userinfo }) => {
  const [comment, setComment] = useState('');
  const [commentLi, setCommentLi] = useState([]);
  const onChange = e => {
    setComment(e.target.value);
  };

  // console.log(comment);

  const onSubmit = () => {
    setCommentLi([...commentLi, comment]);
    setComment('');
  };

  return (
    <div className="feeds">
      <article className="article">
        <div className="article-account">
          <img
            className="article-account-img"
            alt="profile-img"
            src={userinfo.src}
          />
          <div className="article-account-text">
            <p className="article-account-text-1">{userinfo.username}</p>
            <p className="article-account-text-2">{userinfo.userdetail}</p>
          </div>
        </div>
        <div className="article-img">
          <img
            className="article-image"
            alt="feed-img"
            src="./images/41_dahye/feed.png"
          />
        </div>
        <div className="article-function-img">
          <div className="article-function-margin">
            <img
              alt="heart-img"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img alt="comment-img" src="./images/41_dahye/comment.png" />
            <img alt="share-img" src="./images/41_dahye/share.png" />
          </div>
          <div className="article-function-right">
            <img
              className="article-function-bookmark"
              alt="bookmark-img"
              src="./images/41_dahye/bookmark.png"
            />
          </div>
        </div>
        <div className="article-posting">
          <img
            className="article-profile"
            alt="profile-img"
            src="./images/41_dahye/profile.png"
          />
          <span className="name">sally.eee</span>님 외 100명이 좋아합니다.
        </div>
        <p className="article-content">
          <span className="name">sally.eee</span> hello this is sally lee. This
          is photo of myself.
        </p>
        <div className="article-comments">
          <ul className="comment-lists">
            {commentLi.map(item => (
              <Comment item={item} />
            ))}
          </ul>
        </div>
        <div className="article-comment-input">
          <input
            className="comment-input"
            type="text"
            placeholder="댓글달기..."
            value={comment}
            onChange={onChange}
          />
          <button className="submit" onClick={onSubmit}>
            게시
          </button>
        </div>
      </article>
    </div>
  );
};

export default Feed;
