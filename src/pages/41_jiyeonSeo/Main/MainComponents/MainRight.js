import { STORIES_PROFILE, ASIDE_INFO } from './data';
import './MainRight.scss';

function Stories({ id, src, name }) {
  return (
    <div className="row" key={id}>
      <img className="profile-photo active" src={src} alt="프로필 사진" />
      <div className="column">
        <p className="bold marginZero">{name}</p>
        <p className="gray marginZero">15분 전</p>
      </div>
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
            <Stories id={story.id} src={story.src} name={story.name} />
          ))}
        </div>
      </div>

      <div className="recommend">
        <div className="recommend-top">
          <p className="gray marginZero">회원님을 위한 추천</p>
          <p className="bold marginZero">모두 보기</p>
        </div>
        <div className="column gap scroll">
          <div className="row">
            <img
              className="profile-photo active"
              src="./images/41_jiyeon/5.png"
              alt="프로필 사진"
            />
            <div className="column">
              <p className="bold marginZero">eeeeeasy</p>
              <p className="gray marginZero hidden">
                i_am_so_cutes님 외 2명이 팔로우 합니다.
              </p>
            </div>
            <p className="blue">팔로우</p>
          </div>
          <div className="row">
            <img
              className="profile-photo active"
              src="./images/41_jiyeon/6.png"
              alt="프로필 사진"
            />
            <div className="column">
              <p className="bold marginZero">drink_lover</p>
              <p className="gray marginZero hidden">
                mia_seo님 외 5명이 팔로우 합니다.
              </p>
            </div>
            <p className="blue">팔로우</p>
          </div>
          <div className="row">
            <img
              className="profile-photo active"
              src="./images/41_jiyeon/7.png"
              alt="프로필 사진"
            />
            <div className="column">
              <p className="bold marginZero">huhuhu</p>
              <p className="gray marginZero hidden">
                cco_cco님 외 9명이 팔로우 합니다.
              </p>
            </div>
            <p className="blue">팔로우</p>
          </div>
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
