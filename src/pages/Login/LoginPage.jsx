import React from 'react';
import styled from 'styled-components';
import InfoForm from '../../components/common/InfoForm';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../lib/apis/LoginApi';
import { useUserContext } from '../../lib/context/UserProvider';

const S = {
  content: styled.main`
    justify-content: flex-start;
    margin-top: 50px;
  `,
};

const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { userName, setUserName } = useUserContext(null);
  const navigate = useNavigate();

  const handleLogin = async (inputs, types) => {
    try {
      const response = await loginApi(inputs, types);
      if (response.success) {
        console.log('로그인/가입 성공');
        setUserName(response.userName);
        localStorage.clear();
        localStorage.setItem('username', response.userName);
        setLoggedIn(true);
      } else {
        console.log('로그인/가입 실패');
        alert('로그인에 실패하였습니다! : ' + response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate('/main');
    }
  }, [loggedIn]);
  return (
    <S.content>
      <InfoForm type="login" onSubmit={handleLogin} />
    </S.content>
  );
};

export default LoginPage;
