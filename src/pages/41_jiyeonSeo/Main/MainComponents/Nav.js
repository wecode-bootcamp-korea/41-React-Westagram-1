import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <nav>
      <div className="nav-left">
        <Link to="/login_jiyeonSeo">
          <img
            className="icons"
            src="https://cdn-icons-png.flaticon.com/512/717/717392.png"
            alt="instagram"
          />
          <span id="toMainPage" href="/main.html">
            Westagram
          </span>
        </Link>
      </div>
      <div className="nav-center">
        <input id="search" type="text" placeholder="검색" />
      </div>
      <div className="nav-right">
        <img
          className="icons"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          alt="탐색"
        />
        <img
          className="icons"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt="하트"
        />
        <img
          id="myProfile"
          className="icons"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          alt="마이페이지"
        />
      </div>
    </nav>
  );
}

export default Nav;
