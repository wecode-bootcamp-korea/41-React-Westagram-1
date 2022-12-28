import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

export default function LoginSangheon() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState(false);

  const handleUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  useEffect(() => {
    setIsValid(userInfo.email.includes('@') && userInfo.password.length >= 5);
  }, [userInfo]);

  return (
    <main id="main">
      <article className="art_login">
        <div className="wrap_login">
          <h2 className="title">westagram</h2>
          <div className="inner_login">
            <form action="#" id="form">
              <div className="box_inp">
                <input
                  type="text"
                  name="email"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  className="inp_g"
                  value={userInfo.email}
                  onChange={handleUserInfo}
                />
              </div>
              <div className="box_inp">
                <input
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  className="inp_g"
                  value={userInfo.password}
                  onChange={handleUserInfo}
                />
              </div>
              <div className="btn_wrap">
                <button
                  className="btn_login"
                  onClick={() => navigate('/main_sangheon')}
                  disabled={!isValid}
                >
                  로그인
                </button>
              </div>
            </form>
            <a href="#none" className="link_reset">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
