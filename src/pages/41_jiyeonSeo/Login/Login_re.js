import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login_re.scss';

function LoginJiyeon() {
  let [idValue, setIdValue] = useState('');
  let [pwValue, setPwValue] = useState('');
  const active = idValue.includes('@') && pwValue.length > 4;
  let isBlocked;
  active ? (isBlocked = false) : (isBlocked = true);
  let color;
  isBlocked
    ? (color = { backgroundColor: '#c5e1fb' })
    : (color = { backgroundColor: '#2099f1' });

  const savedUserId = event => {
    setIdValue(event.target.value);
  };

  const savedUserPw = event => {
    setPwValue(event.target.value);
  };

  const navigate = useNavigate();

  const handleClickEvent = () => {
    navigate('/main_jiyeonSeo');
  };

  return (
    <div className="wrapLogin">
      <div className="content">
        <h1>Westagram</h1>
        <div className="inputs">
          <input
            id="idInput"
            type="text"
            value={idValue}
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={savedUserId}
          />
          <input
            id="pwInput"
            type="password"
            value={pwValue}
            placeholder="비밀번호"
            onChange={savedUserPw}
          />
        </div>
        <button
          className="loginBtn"
          disabled={isBlocked}
          style={color}
          onClick={handleClickEvent}
        >
          로그인
        </button>
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
}

export default LoginJiyeon;
