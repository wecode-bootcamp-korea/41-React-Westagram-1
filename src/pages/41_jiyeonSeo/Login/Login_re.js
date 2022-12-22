import React, { useState } from 'react';
import './Login_re.scss';
import { Link } from 'react-router-dom';

function LoginJiyeon() {
  return (
    <div className="wrapLogin">
      <div className="content">
        <h1>Westagram</h1>
        <div className="inputs">
          <input
            id="idInput"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input id="pwInput" type="password" placeholder="비밀번호" />
        </div>
        <Link to="/main_jiyeonSeo" className="loginBtn">
          로그인
        </Link>
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}

export default LoginJiyeon;
