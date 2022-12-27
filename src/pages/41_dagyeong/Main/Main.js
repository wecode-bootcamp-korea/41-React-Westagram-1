import React, { useState } from 'react';
import './Main.scss';
import Comment from './Components/Comment';

function MainDagyeong() {
  const [commentValue, setComment] = useState(''); //사용자가 입력하고 있는 댓글
  const [comments, setCommentList] = useState([]); // 댓글 리스트
  // const [isValid, setIsValid] = useState(false); // 댓글 게시 가능 여부

  const commentInput = event => {
    setComment(event.target.value);
    // console.log(event.target.value);
    // console.log(Array.isArray(event.target.value));
  };

  const feedComments = [...comments];
  const nickName = 'maratang42';
  // console.log(feedComments);
  let onEnter = event => {
    if (event.key === 'Enter' && commentValue.length > 0) {
      // console.log(event.key);
      // console.log(feedComments);
      feedComments.push(commentValue);
      setCommentList(feedComments);
      setComment('');
    }
  };

  let clickBtn = event => {
    if (commentValue.length > 0) {
      // console.log(feedComments);
      feedComments.push(commentValue);
      setCommentList(feedComments);
      setComment('');
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar_left">
          <img
            className="icon"
            src="./images/41_dagyeong/instagram.png"
            alt="instagram logo"
          />
          <span>Westagram</span>
        </div>
        <input type="text" placeholder="검색" className="navbar_search" />
        <div className="navbar_icons">
          <img
            className="icon"
            src="./images/41_dagyeong/explore.png"
            alt="explore"
          />
          <img
            className="icon"
            src="./images/41_dagyeong/heart.png"
            alt="heart"
          />
          <img
            className="icon"
            src="./images/41_dagyeong/profile.png"
            alt="profile"
          />
        </div>
      </nav>
      <main>
        <div className="feeds">
          <article>
            <div className="feedTop">
              <img
                src="./images/41_dagyeong/myProfile.jpeg"
                className="feedprofile_img"
                alt="my profile"
              />
              <span className="feeds_nickName">hihello</span>
              <img
                src="./images/41_dagyeong/option.png"
                className="feedTop_option"
                alt="menu"
              />
            </div>
            <img
              src="./images/41_dagyeong/pic2.jpeg"
              className="feeds_img"
              alt="picture1"
            />
            <div className="article_icons">
              <img src="./images/41_dagyeong/heart.png" alt="heart" />
              <img src="./images/41_dagyeong/chat.png" alt="chat" />
              <img src="./images/41_dagyeong/send.png" alt="send" />
              <img src="./images/41_dagyeong/bookmark.png" alt="bookmark" />
            </div>
            <p className="like">좋아요 3270개</p>
            <div className="commentLists">
              <ul className="comment_ul">
                <li className="comment_box">
                  <span className="nickName">nana123</span>
                  <span className="comment">
                    위워크에서 진행한 필름카메라 클래스...
                  </span>
                  {/* <!-- <img src="./images/heart.png" class="comment_icon" /> --> */}
                  <span className="delete">x</span>
                </li>
              </ul>
              <ul className="comment_ul">
                <li className="comment_box">
                  <span className="nickName">spam789</span>
                  <span className="comment">나도 필름카메라 가지고 싶다!!</span>
                  <span className="delete">x</span>
                  {/* <!-- <img src="./images/heart.png" class="comment_icon" /> --> */}
                </li>
              </ul>
              <ul className="comment_ul">
                {feedComments.map((comment, idx) => (
                  // <span className='nickName'>{nickName}</span>
                  // <span className="comment">{comments}</span>
                  <Comment comments={comment} key={idx} />
                ))}
                <li className="comment_box">
                  {/* <span className="nickName">{nickName}</span> */}
                </li>
              </ul>
            </div>
            <p className="like">35분전</p>
            <hr />
            {/* <!-- 댓글 --> */}
            <div className="do_comment">
              <input
                type="text"
                placeholder="댓글달기..."
                className="comment_input"
                value={commentValue}
                onChange={commentInput}
                // onKeyUp={event => {
                //   event.target.value.length > 0
                //     ? setIsValid(true)
                //     : setIsValid(false);
                // }}
                onKeyUp={onEnter}
              />
              <button className="comment_btn" id="post" onClick={clickBtn}>
                게시
              </button>
            </div>
          </article>
          {/* <!-- 메인 오른쪽 페이지 --> */}
          <div className="main_right">
            <div className="myprofile">
              <img
                src="./images/41_dagyeong/myProfile.jpeg"
                className="myprofile_img"
                alt="my profile"
              />
              <div className="my_profile">
                <span>nana123</span>
                <span>na | 인스타그램</span>
              </div>
            </div>
            {/* <!-- 스토리 --> */}
            <div className="storybox">
              <div className="storybox_top">
                <span>스토리</span>
                <span className="story_all_view">모두 보기</span>
              </div>
              <div className="westagram_story">
                <div className="story_nickname">
                  <img
                    src="./images/41_dagyeong/friend1.jpeg"
                    className="feedprofile_img"
                    alt="feed profile1"
                  />
                  <div className="story_state">
                    <p>my_me_mine</p>
                    <p className="story_time">2분전</p>
                  </div>
                </div>
                <div className="story_nickname">
                  <img
                    src="./images/41_dagyeong/friend2.jpeg"
                    className="feedprofile_img"
                    alt="feed profile2"
                  />
                  <div className="story_state">
                    <p>ひらがな</p>
                    <p className="story_time">12분전</p>
                  </div>
                </div>
                <div className="story_nickname">
                  <img
                    src="./images/41_dagyeong/friend1.jpeg"
                    className="feedprofile_img"
                    alt="feed profile3"
                  />
                  <div className="story_state">
                    <p>Zhōngguó rén</p>
                    <p className="story_time">12분전</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- 회원 추천 --> */}
            <div className="recommend">
              <div className="recommend_top">
                <span>회원님을 위한 추천</span>
                <span className="recommend_all_view">모두 보기</span>
              </div>
              <div className="story_nickname">
                <img
                  src="./images/41_dagyeong/friend1.jpeg"
                  className="feedprofile_img"
                  alt="recommend friend"
                />
                <div className="story_state">
                  <p>happy</p>
                  <p className="story_anotherpeople">_dfasf 님 외 2명이...</p>
                </div>
                <div className="recommend_follow">
                  <button>팔로우</button>
                </div>
              </div>
              <div className="story_nickname">
                <img
                  src="./images/41_dagyeong/friend1.jpeg"
                  className="feedprofile_img"
                  alt="feed profile"
                />
                <div className="story_state">
                  <p>looks_good</p>
                  <p className="story_anotherpeople">o_o 님 외 6명이...</p>
                </div>
                <div className="recommend_follow">
                  <button>팔로우</button>
                </div>
              </div>
              <div className="story_nickname">
                <img
                  src="./images/41_dagyeong/friend1.jpeg"
                  className="feedprofile_img"
                  alt="feed profile"
                />
                <div className="story_state">
                  <p>joy</p>
                  <p className="story_anotherpeople">
                    Zhōngguó rén 님 외 2명이...
                  </p>
                </div>
                <div className="recommend_follow">
                  <button>팔로우</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainDagyeong;
