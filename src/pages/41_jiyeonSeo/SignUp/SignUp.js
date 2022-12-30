import React, { useEffect, useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import './SignUp.scss';

function SignUpJiyeon() {
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    phoneNumber: '',
    password: '',
  });
  const { email, name, phoneNumber, password } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const active =
    email !== '' && name !== '' && phoneNumber !== '' && password !== '';

  const signUp = e => {
    e.preventDefault();
    fetch('http://10.58.52.146:3000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: email,
        name: name,
        phoneNumber: phoneNumber,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert('회원가입 성공! 로그인하세요!');
        navigate('/login_jiyeonSeo');
      });
  };

  const navigate = useNavigate();
  const navi = () => {
    navigate('/login_jiyeonSeo');
  };

  return (
    <div className="wrapSignUp">
      <div>
        <h2>Westagram</h2>
        <p className="comment">친구들의 사진과 동영상을 보려면 가입하세요.</p>
        <form onSubmit={signUp}>
          <input
            type="email"
            onChange={onChange}
            name="email"
            placeholder="이메일 주소"
            require="true"
            value={email}
          />
          <input
            type="text"
            name="name"
            value={name}
            placeholder="성명"
            require="true"
            onChange={onChange}
          />
          <input
            type="text"
            onChange={onChange}
            name="phoneNumber"
            value={phoneNumber}
            placeholder="핸드폰 번호"
            require="true"
          />
          <input
            type="password"
            onChange={onChange}
            name="password"
            value={password}
            placeholder="비밀번호"
            require="true"
          />
          <p>
            저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
            업로드했을 수도 있습니다.
            <span className="blue"> 더 알아보기</span>
          </p>
          <button
            onSubmit={signUp}
            className={active ? ' unBlocked' : ' blocked'}
            disabled={!active}
          >
            가입
          </button>
        </form>
      </div>
      <div>
        <p className="login">
          계정이 있으신가요?
          <span className="blue" onClick={navi}>
            {' '}
            로그인
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUpJiyeon;
