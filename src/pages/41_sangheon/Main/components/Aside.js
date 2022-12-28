import React from 'react';
import {
  ASIDE_FOOTER_LIST,
  ASIDE_USER_STORY,
  ASIDE_RECOMMEND_USER,
} from '../../uiData';

function Aside() {
  return (
    <aside className="main-right">
      <div className="box-personal" />
      <div className="wrap-info wrap-story">
        <div className="box-top">
          <strong className="tit-info">스토리</strong>
          <a href="#none" className="link_more">
            모두 보기
          </a>
        </div>
        <ul className="list-users">
          {ASIDE_USER_STORY.map(item => {
            return (
              <li key={item.id}>
                <div className="box-user">
                  <span className="thumb-img">
                    <img src={item.thumbUrl} alt="" />
                  </span>
                  <span className="box-cont">
                    <strong className="tit-user">{item.username}</strong>
                    <span className="cont-info">{item.time}</span>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="wrap-info">
        <div className="box-top">
          <strong className="tit-info">회원님을 위한 추천</strong>
          <a href="#none" className="link_more">
            모두 보기
          </a>
        </div>
        <ul className="list-users">
          {ASIDE_RECOMMEND_USER.map(item => {
            return (
              <li key={item.id}>
                <div className="box-user">
                  <span className="thumb-img">
                    <img src={item.thumbUrl} alt="" />
                  </span>
                  <span className="box-cont">
                    <strong className="tit-user">{item.username}</strong>
                    <span className="cont-info">{item.info}</span>
                  </span>
                </div>
                <button className="btn-follow">팔로우</button>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="list-footer">
        {ASIDE_FOOTER_LIST.map(item => {
          return <li key={item.id}>{item.menuList}</li>;
        })}
      </ul>
    </aside>
  );
}

export default Aside;
