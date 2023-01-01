import React from 'react';
import './Login.scss';
import { useState } from 'react';

function LoginHwanseong() {
  const [id, setId] = useState(''); // 로그인 input id 값을 저장하기 위해서
  const [password, setPassword] = useState('');

  const saveId = event => {
    // 값이 변경될때마다 저장하기 위해 / 변경 될때마다 onChange e.
    setId(event.target.value);
  };

  const savePassword = event => {
    setPassword(event.target.value);
  };

  return (
    <div className="body">
      <header>Westagram</header>
      <input
        onChange={saveId}
        className="inputId"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        value={id}
      />
      <input
        onChange={savePassword}
        className="inputPassword"
        type="password"
        placeholder="비밀번호"
      />
      <button
        className={id.includes('@') && password.length >= 5 ? 'btnOn' : 'btn'}
        type="button"
        disabled={!(id.includes('@') && password.length >= 5) ? true : false}
      >
        로그인
      </button>
      <footer>비밀번호를 잊으셨나요?</footer>
      <script type="text/javascript" src="login.js" />
    </div>
  );
}
export default LoginHwanseong;
