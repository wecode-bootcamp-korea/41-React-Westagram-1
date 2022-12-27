import React, { useEffect, useState } from 'react';
import './Content.scss';

function Comment({ name, text, liked }) {
  const [like, setLike] = useState(liked);

  const handleHeartClick = () => {
    setLike(prev => !prev);
  };

  const handleDeleteClick = event => {
    event.target.parentElement.remove();
  };

  return (
    <li>
      <span className="bold">{name}</span>
      <span className="text">{text}</span>
      <img
        onClick={handleHeartClick}
        className="heart"
        src={
          like
            ? './images/41_jiyeon/heart-fill.png'
            : './images/41_jiyeon/heart.png'
        }
        alt="하트"
      />
      <span className="gray">42분 전</span>
      <span className="delete gray" onClick={handleDeleteClick}>
        삭제
      </span>
    </li>
  );
}

function Feed({ name, profileSrc, src, text, liked }) {
  const [input, setInput] = useState('');
  const [comments, setComments] = useState([]);
  const [like, setLike] = useState(liked);
  let readyToClick = input !== '' ? true : false;

  const onChange = event => {
    setInput(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (input === '') {
      return;
    }
    setComments(prev => [...prev, input]);
    setInput('');
  };

  const handleHeartClick = event => {
    setLike(prev => !prev);
  };

  return (
    <div className="feed">
      <div className="feed-top">
        <img className="profile-photo" src={profileSrc} alt="프로필 이미지" />
        <p>{name}</p>
        <img src="./images/41_jiyeon/dot.png" alt="dot" />
      </div>
      <img className="feed-img" src={src} alt="피드사진" />
      <div className="like-emojis">
        <img
          onClick={handleHeartClick}
          src={
            like
              ? './images/41_jiyeon/heart-fill.png'
              : './images/41_jiyeon/heart.png'
          }
          alt="하트"
        />
        <img
          className="small-emojis"
          src="./images/41_jiyeon/bubble-empty.png"
          alt="댓글"
        />
        <img
          className="small-emojis"
          src="./images/41_jiyeon/upload (1).png"
          alt="업로드"
        />
        <img
          className="small-emojis"
          src="./images/41_jiyeon/bookmark.png"
          alt="북마크"
        />
      </div>
      <p className="txt-likes">
        <img
          className="small-image"
          src="./images/41_jiyeon/mia.png"
          alt="프로필 이미지"
        />
        <span className="bold">mia_seo</span>님
        <span className="bold">외 100명</span>이 좋아합니다
      </p>
      <div className="comments">
        <p>
          <span className="bold">{name}</span> {text}
        </p>
        <div>
          <ul className="comment-lists">
            {comments.map((comment, index) => (
              <Comment key={index} name={name} text={comment} liked={false} />
            ))}
          </ul>
        </div>
      </div>
      <form id="comment" onSubmit={onSubmit}>
        <input
          onChange={onChange}
          id="commentInput"
          type="text"
          placeholder="댓글달기"
          required
          value={input}
        />
        <button
          style={readyToClick ? { color: '#2099f1' } : { color: '#c5e1fb' }}
        >
          게시
        </button>
      </form>
    </div>
  );
}

function Content() {
  /*mock data로 들어온 commnetList*/
  const [commentLists, setCommentLists] = useState([]);
  /*mock data로 들어온 feedList*/
  const [feedLists, setFeedLists] = useState([]);

  useEffect(() => {
    fetch('./data/41_jiyeon/commentData.json', {
      method: 'GET',
    })
      .then(Response => Response.json())
      .then(result => setCommentLists(result));
  });

  useEffect(() => {
    fetch('./data/41_jiyeon/feedData.json', {
      method: 'GET',
    })
      .then(Response => Response.json())
      .then(result => setFeedLists(result));
  });

  const [input, setInput] = useState('');
  const [comments, setComments] = useState([]);
  const [like, setLike] = useState(true);
  let readyToClick = input !== '' ? true : false;

  const onChange = event => {
    setInput(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (input === '') {
      return;
    }
    setComments(prev => [...prev, input]);
    setInput('');
  };

  const handleHeartClick = event => {
    setLike(prev => !prev);
  };

  return (
    <div className="content">
      <div className="feed">
        <div className="feed-top">
          <img
            className="profile-photo"
            src="./images/41_jiyeon/mia.png"
            alt="프로필 이미지"
          />
          <p>mia_seo</p>
          <img src="./images/41_jiyeon/dot.png" alt="dot" />
        </div>
        <img
          className="feed-img"
          src="./images/41_jiyeon/붕어빵루피.jpeg"
          alt="붕어빵루피"
        />
        <div className="like-emojis">
          <img
            onClick={handleHeartClick}
            src={
              like
                ? './images/41_jiyeon/heart-fill.png'
                : './images/41_jiyeon/heart.png'
            }
            alt="하트"
          />
          <img
            className="small-emojis"
            src="./images/41_jiyeon/bubble-empty.png"
            alt="댓글"
          />
          <img
            className="small-emojis"
            src="./images/41_jiyeon/upload (1).png"
            alt="업로드"
          />
          <img
            className="small-emojis"
            src="./images/41_jiyeon/bookmark.png"
            alt="북마크"
          />
        </div>
        <p className="txt-likes">
          <img
            className="small-image"
            src="./images/41_jiyeon/mia.png"
            alt="프로필 이미지"
          />
          <span className="bold">mia_seo</span>님
          <span className="bold">외 100명</span>이 좋아합니다
        </p>
        <div className="comments">
          <p>
            <span className="bold">mia_seo</span> 인생... 힘들다....💧
          </p>
          <div>
            <ul className="comment-lists">
              <Comment
                name="wecode_bootcamp"
                text="여기서 이러시면 안됩니다!!"
                liked={true}
              />
              {commentLists.map(comment => (
                <Comment
                  key={comment.id}
                  name={comment.name}
                  text={comment.text}
                  liked={comment.liked}
                />
              ))}
              {comments.map((comment, index) => (
                <Comment
                  key={index}
                  name="miya___ho"
                  text={comment}
                  liked={false}
                />
              ))}
            </ul>
          </div>
        </div>
        <form id="comment" onSubmit={onSubmit}>
          <input
            onChange={onChange}
            id="commentInput"
            type="text"
            placeholder="댓글달기"
            required
            value={input}
          />
          <button
            style={readyToClick ? { color: '#2099f1' } : { color: '#c5e1fb' }}
          >
            게시
          </button>
        </form>
      </div>
      {feedLists.map(feed => (
        <Feed
          key={feed.id}
          name={feed.name}
          profileSrc={feed.profileSrc}
          src={feed.src}
          text={feed.text}
          liked={feed.liked}
        />
      ))}
    </div>
  );
}

export default Content;
