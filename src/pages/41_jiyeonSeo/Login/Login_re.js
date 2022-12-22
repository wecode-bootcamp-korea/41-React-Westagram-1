import React, { useState } from 'react';
import './Login_re.scss';
import { Link } from 'react-router-dom';

function LoginJiyeon() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const saveUserId = event => {
    setIdValue(event.target.value);
  };

  const saveUserPw = event => {
    setPwValue(event.target.value);
  };

  return (
    <div className="wrapLogin">
      <div className="content">
        <h1>Westagram</h1>
        <div className="inputs">
          <input
            id="idInput"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          />
          <input
            id="pwInput"
            type="password"
            placeholder="비밀번호"
            onChange={saveUserPw}
          />
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
