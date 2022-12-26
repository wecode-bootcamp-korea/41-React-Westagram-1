import React from 'react';
import './Login.scss';

function LoginHwanseong() {
  return (
    <div className="body">
      <header>Westagram</header>
      <input
        className="inputId"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input className="inputPassword" type="password" placeholder="비밀번호" />
      <button className="inputButton" type="button" disabled>
        로그인
      </button>
      <footer>비밀번호를 잊으셨나요?</footer>
      <script type="text/javascript" src="login.js" />
    </div>
  );
}
export default LoginHwanseong;
