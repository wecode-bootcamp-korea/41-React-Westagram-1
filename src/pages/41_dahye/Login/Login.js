import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main_dahye'); // 클릭시 /main_dahye로 이동, navigate는 리액트 컴포넌트
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const isValid = id.includes('@') && pw.length >= 5; // .includes 메서드 , .length 메서드

  const saveUserId = event => {
    setId(event.target.value); // target 메서드, value 메서드
  };

  const saveUserPw = event => {
    setPw(event.target.value);
  };

  console.log('id:', id);
  console.log('pw:', pw);

  return (
    <div className="Login">
      <div className="login-box">
        <div className="logo">Westagram</div>
        <input
          className="id-box input-box"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={id}
          onChange={saveUserId}
        />
        <input
          className="pw-box input-box"
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={saveUserPw}
        />
        <button
          className="login-btn"
          type="button"
          onClick={goToMain}
          disabled={isValid ? false : true}
          style={
            isValid
              ? { backgroundColor: '#0095f6' }
              : { backgroundColor: '#b0dffc' }
          }
        >
          <span>로그인 </span>
        </button>
        <div className="forgot-pw">비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
};

export default Login;
