import { STORIES_PROFILE, RECOMMEND_PROFILE, ASIDE_INFO } from './data';
import './MainRight.scss';

function Stories({ id, src, name }) {
  return (
    <div className="row">
      <img className="profile-photo active" src={src} alt="프로필 사진" />
      <div className="column">
        <p className="bold marginZero">{name}</p>
        <p className="gray marginZero">15분 전</p>
      </div>
    </div>
  );
}

function Recommend({ src, name, follow }) {
  return (
    <div className="row">
      <img className="profile-photo active" src={src} alt="프로필 사진" />
      <div className="column">
        <p className="bold marginZero">{name}</p>
        <p className="gray marginZero hidden">{follow}</p>
      </div>
      <p className="blue">팔로우</p>
    </div>
  );
}

function MainRight() {
  return (
    <div className="mainRight">
      <div className="profile">
        <img src="./images/41_jiyeon/짱구.png" alt="짱구" />
        <div>
          <p>miya___ho</p>
          <p className="gray">지연🙌</p>
        </div>
      </div>
      <div className="stories">
        <div className="story-top">
          <p className="gray marginZero">스토리</p>
          <p className="bold marginZero">모두 보기</p>
        </div>
        <div className="column gap scroll">
          {STORIES_PROFILE.map(story => (
            <Stories key={story.id} src={story.src} name={story.name} />
          ))}
        </div>
      </div>

      <div className="recommend">
        <div className="recommend-top">
          <p className="gray marginZero">회원님을 위한 추천</p>
          <p className="bold marginZero">모두 보기</p>
        </div>
        <div className="column gap scroll">
          {RECOMMEND_PROFILE.map(recommend => (
            <Recommend
              key={recommend.id}
              src={recommend.src}
              name={recommend.name}
              follow={recommend.follow}
            />
          ))}
        </div>
      </div>
      <div className="gray">
        <br />
        {ASIDE_INFO.map(aside => (
          <span className="info" key={aside.id}>
            {aside.data}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MainRight;
