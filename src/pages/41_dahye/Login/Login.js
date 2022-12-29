import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

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

  const loginClick = () => {
    fetch('http://10.58.52.249:3000/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: id, password: pw }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        localStorage.setItem('accessToken', result.accessToken); // setItem 메서드로
      });
  };

  // console.log(localStorage.getItem('accessToken')); // 콘솔에 출력하기 위해 getItem 메서드 사용

  // 사용자 입력 데이터 저장되는지 확인하는 콘솔
  //console.log('id:', id);
  //console.log('pw:', pw);

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
          // fetch 실행함수
          onClick={loginClick}
          // onClick={goToMain}
          // disabled={isValid ? false : true}
          disabled={!isValid}
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
