import './MainRight.scss';

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
          <div className="row">
            <img
              className="profile-photo active"
              src="./images/41_jiyeon/1.png"
              alt="프로필 사진"
            />
            <div className="column">
              <p className="bold marginZero">greenMon</p>
              <p className="gray marginZero">15분 전</p>
            </div>
          </div>
          <div className="row">
            <img
              className="profile-photo active"
              src="./images/41_jiyeon/2.png"
              alt="프로필 사진"
            />
            <div className="column">
              <p className="bold marginZero">cco_cco</p>
              <p className="gray marginZero">45분 전</p>
            </div>
          </div>
          <div className="row">
            <img
              className="profile-photo active"
              src="./images/41_jiyeon/3.png"
              alt="프로필 사진"
            />
            <div className="column">
              <p className="bold marginZero">queoqa</p>
              <p className="gray marginZero">3시간 전</p>
            </div>
          </div>
          <div className="row">
            <img
              className="profile-photo active"
              src="./image/41_jiyeons/4.png"
              alt="프로필 사진"
            />
            <div className="column">
              <p className="bold marginZero">i_am_so_cute</p>
              <p className="gray marginZero">20시간 전</p>
            </div>
          </div>
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
        instagram 정보•지원•홍보 센터•API•
        <br />
        채용 정보•개인정보처리방침•약관•
        <br />
        디렉터리•프로필•해시태그•언어
        <br />
        <br />© 2019 INSTAGRAM
      </div>
    </div>
  );
}

export default MainRight;
