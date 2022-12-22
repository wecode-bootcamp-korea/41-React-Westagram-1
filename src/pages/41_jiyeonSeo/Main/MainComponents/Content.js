import './Content.scss';

function Content() {
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
          <img src="./images/41_jiyeon/heart-fill.png" alt="하트" />
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
          <ul className="comment-lists">
            <li>
              <span className="bold">wecode_bootcamp</span>
              <span>여기서 이러시면 안됩니다!!</span>
              <img
                className="heart"
                src="./images/41_jiyeon/heart.png"
                alt="하트"
              />
              <span className="gray">42분 전</span>
              <span className="delete gray">삭제</span>
            </li>
          </ul>
        </div>
        <form id="comment">
          <input
            id="commentInput"
            type="text"
            placeholder="댓글달기"
            required
          />
          <button id="commentBtn">게시</button>
        </form>
      </div>
    </div>
  );
}

export default Content;
