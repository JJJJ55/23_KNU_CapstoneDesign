import React from 'react';
import styled from 'styled-components';
import InfoForm from '../../components/common/InfoForm';
import { useNavigate } from 'react-router-dom';
import { LoginApi } from '../../lib/apis/LoginApi';
import { useContext } from 'react';
import { LoginDispatchContext } from '../../lib/context/LoginContext';
const S = {
  content: styled.main`
    justify-content: flex-start;
    margin-top: 50px;
    height: 100svh;
  `,
  FindPw: styled.button`
    width: 80px;
    height: 35px;
    margin-top: 5px;
    position: relative;
    margin-left: 242px;
    font-weight: bold;
    cursor: pointer;
  `,
};

const LoginPage = () => {
  const { login } = useContext(LoginDispatchContext);
  const navigate = useNavigate();

  const handleLogin = async (inputs) => {
    try {
      const response = await LoginApi(inputs);
      if (response.success) {
        login(response.userName, response.email);
        navigate('/main');
      } else {
        alert('로그인에 실패하였습니다! : ' + response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFind = () => {
    navigate('/find');
  };

  return (
    <S.content>
      <InfoForm type="login" onSubmit={handleLogin} />
      <S.FindPw onClick={handleFind}>비밀번호 찾기</S.FindPw>
    </S.content>
  );
};

export default LoginPage;
