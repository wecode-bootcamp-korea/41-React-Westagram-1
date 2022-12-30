import React, { useEffect, useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import './Login_re.scss';

function LoginJiyeon() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const active = idValue.includes('@') && pwValue.length > 4;

  const savedUserId = event => {
    setIdValue(event.target.value);
  };

  const savedUserPw = event => {
    setPwValue(event.target.value);
  };

  // const navigate = useNavigate();
  const handleClickEvent = () => {
    fetch('http://10.58.52.146:3000/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: idValue, password: pwValue }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.message);
        localStorage.setItem('mytoken', data.message);
        console.log(localStorage.getItem('mytoken'));
      });

    // navigate('/main_jiyeonSeo');
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
          className={'loginBtn' + (active ? ' unBlocked' : ' blocked')}
          disabled={!active}
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
