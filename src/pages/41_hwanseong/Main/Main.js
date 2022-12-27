import React, { useState } from 'react';
import './Main.scss';

const Main = () => {
  const [comment, setComment] = useState('');

  return (
    <section className="main">
      <div className="nav">
        <div className="navLeft">
          <img src="images/41_hwanseong/mainpagelogo.png" alt="로고" />
          <span>westagram</span>
        </div>
        <div className="navCenter">
          <input placeholder="검색" />
        </div>
        <div className="navRight">
          <img src="images/41_hwanseong/compass.png" alt="컴퍼스" />
          <img src="images/41_hwanseong/heart.png" alt="하트" />
          <img src="images/41_hwanseong/user.png" alt="사람" />
        </div>
      </div>
      <main className="mainContainer">
        <div className="feeds">
          <div className="article">
            <div className="articleTop">
              <img
                className="userPp"
                src="images/41_hwanseong/userImage.jpg"
                alt="유저프사"
              />
              <div className="userId">
                <div>Wecode_bootcamp</div>
                <div>wecode</div>
              </div>
              <img
                className="jeomsegae"
                src="images/41_hwanseong/list.png"
                alt="점세개"
              />
            </div>
            <div className="articleMid">
              <img
                className="articleImage"
                src="images/41_hwanseong/articleImage.jpg"
                alt="아티클이미지"
              />
            </div>
            <div className="articleBot">
              <div className="imagesegae">
                <img src="images/41_hwanseong/heart.png" alt="좋아요" />
                <img src="images/41_hwanseong/list.png" alt="멘션" />
                <img src="images/41_hwanseong/compass.png" alt="다운로드" />
                <div className="flag">
                  <img src=".images/sad.png" alt="!" />
                </div>
              </div>
              <div className="list">
                <h6>asdasdasd</h6>
                <input placeholder="댓글입력" />
              </div>
            </div>
          </div>
        </div>
        <div className="mainRight">
          <div className="mainRighttop">
            <img
              className="userPp2"
              src="./images/userImage.jpg"
              alt="또프사"
            />
            <div className="userId2">
              <div>Wecode_bootcamp</div>
              <div>wecode</div>
            </div>
          </div>
          <div className="mainRightmid">
            <div>
              <div className="userId3">
                <img
                  className="userPp3"
                  src="./images/userImage.jpg"
                  alt="중복프사"
                />
                <div>
                  <div>Wecode_bootcamp</div>
                  <div>wecode</div>
                </div>
              </div>
              <div className="userId3">
                <img
                  className="userPp3"
                  src="./images/userImage.jpg"
                  alt="중복프사"
                />
                <div>
                  <div>Wecode_bootcamp</div>
                  <div>wecode</div>
                </div>
              </div>
              <div className="userId3">
                <img
                  className="userPp3"
                  src="./images/userImage.jpg"
                  alt="중복프사"
                />
                <div>
                  <div>Wecode_bootcamp</div>
                  <div>wecode</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mainRightbot">
            <div className="b">
              <div className="userId4">
                <img
                  className="userPp4"
                  src="./images/userImage.jpg"
                  alt="또중복프사"
                />
                <div>
                  <div>Wecode_bootcamp</div>
                  <div>wecode</div>
                </div>
              </div>
              <div className="userId4">
                <img
                  className="userPp4"
                  src="./images/userImage.jpg"
                  alt="또중복프사"
                />
                <div>
                  <div>Wecode_bootcamp</div>
                  <div>wecode</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Main;
