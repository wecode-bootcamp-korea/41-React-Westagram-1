import React, { useState } from 'react';
import './Main.scss';

const Feed = () => {
  // const addComment = () {
  //   setComments([...comments, commentInput])
  // }

  return (
    <main className="main">
      <div className="feeds">
        <article className="article">
          <div className="article-account">
            <img
              className="article-account-img"
              alt="profile-img"
              src="./images/41_dahye/wecode_logo.png"
            />
            <div className="article-account-text">
              <p className="article-account-text-1">wecode_bootcamp</p>
              <p className="article-account-text-2">WeCode|위코드</p>
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
            <span className="name">sally.eee</span> hello this is sally lee.
            This is photo of myself.
          </p>
          <div className="article-comments">
            <ul className="comment-lists">
              <li>
                <span className="name">sally.eee</span>
                <span> hello</span>
              </li>
            </ul>
          </div>
          <div className="article-comment-input">
            <input
              className="comment-input"
              type="text"
              placeholder="댓글달기..."
            />
            <button className="submit">게시</button>
          </div>
        </article>
      </div>
      <div className="main-right">
        <div className="account">
          <img
            className="account-img"
            alt="profile-img"
            src="./images/41_dahye/wecode_logo.png"
          />
          <div className="account-text">
            <p className="account-text-1">wecode_bootcamp</p>
            <p className="account-text-2">WeCode|위코드</p>
          </div>
        </div>
        <div className="story-box">
          <div className="story-title">
            <p>스토리</p>
            <p class="font-bold">모두보기</p>
          </div>
          <div className="story-account-1">
            <img
              className="story-account-img"
              alt="profile-img"
              src="./images/41_dahye/wecode_logo.png"
            />
            <div className="story-account-text">
              <p className="story-account-text-1">wecode_bootcamp</p>
              <p className="story-account-text-2">WeCode|위코드</p>
            </div>
          </div>
          <div className="story-account-1">
            <img
              className="story-account-img"
              alt="profile-img"
              src="./images/41_dahye/wecode_logo.png"
            />
            <div className="story-account-text">
              <p className="story-account-text-1">wecode_bootcamp</p>
              <p className="story-account-text-2">WeCode|위코드</p>
            </div>
          </div>
          <div className="story-account-1">
            <img
              className="story-account-img"
              alt="profile-img"
              src="./images/41_dahye/wecode_logo.png"
            />
            <div className="story-account-text">
              <p className="story-account-text-1">wecode_bootcamp</p>
              <p className="story-account-text-2">WeCode|위코드</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feed;
