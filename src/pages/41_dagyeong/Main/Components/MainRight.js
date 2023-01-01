import React from 'react';
import asideData from '../AsideData';
import './MainRight.scss';

const Main_right = () => {
  return (
    <div className="feeds">
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
              <p className="story_anotherpeople">Zhōngguó rén 님 외 2명이...</p>
            </div>
            <div className="recommend_follow">
              <button>팔로우</button>
            </div>
          </div>
        </div>
        <div className="aside">
          {/* {console.log('asideData :', asideData)} */}
          {asideData.map(asideData => {
            return <span key={asideData.id}>{asideData.name} ・ </span>;
            // <Aside key={id} name={aside} />;
          })}

          {/* <span>
      소개 ・ 도움말 ・ 홍보 센터 ・ API ・ 채용 정보 ・
      개인정보처리방침 ・ 약관 ・ 위치 ・ 언어
    </span> */}
          <p>2022 INSTAGRAM FROM META</p>
        </div>
      </div>
    </div>
  );
};

export default Main_right;
