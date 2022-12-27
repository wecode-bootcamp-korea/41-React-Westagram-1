import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginDagyeong() {
  const navigate = useNavigate();

  const [idValue, setId] = useState('');
  const [pwValue, setPw] = useState('');
  // const [disabled, setDisabled] = React.useState(true);

  const saveUserId = event => {
    // console.log(event);
    setId(event.target.value);
    // console.log(event.target.value);
  };

  const saveUserPw = event => {
    setPw(event.target.value);
    // console.log(event.target.value);
  };

  const active = idValue.includes('@') && pwValue.length >= 5;
  let blocked;
  active ? (blocked = false) : (blocked = true);

  let color;
  active
    ? (color = { backgroundColor: 'blue' })
    : (color = { backgroundColor: '#56a5f2' });

  return (
    <div className="login_wraaper">
      <div className="login">
        <h2>Instagram</h2>
        <div className="login_box">
          <input
            className="login_id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={idValue}
            onChange={saveUserId}
          />
          <input
            className="login_pw"
            type="password"
            placeholder="비밀번호"
            value={pwValue}
            onChange={saveUserPw}
          />
          <div>
            <button
              className="login_btn"
              onClick={() => {
                navigate('/main_dagyeong');
              }}
              style={color}
              disabled={blocked}
            >
              로그인
            </button>
          </div>
        </div>
        <div className="forget_pw">
          <p>비밀번호를 잊으셨나요?</p>
        </div>
      </div>
    </div>
  );
}

export default LoginDagyeong;
