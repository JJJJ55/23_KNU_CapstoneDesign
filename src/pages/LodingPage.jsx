import React from 'react';
import styled from 'styled-components';
import mainLogo from '../assets/img/후면로고.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom/dist';

const S = {
  content: styled.main`
    height: 100vh;
    background-color: #fff;
    justify-content: center;
  `,
  box: styled.div`
    position: relative;
    width: 300px;
    height: 100px;
    margin: 0 auto;
    img {
      position: absolute;
      width: 280px;
      height: 100px;
      margin: 0 auto;
      right: 0;
      left: 0;
      bottom: 60px;
    }
  `,
};

const LodingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(async () => {
      // if (isLogedIn && (await isValidToken())) {
      // 	navigate('/home');
      // } else {
      // 	logout();
      // 	navigate('/login');
      // }
      navigate('/main');
    }, 1500);
  }, []);
  return (
    <S.content>
      <S.box>
        <img src={mainLogo} alt="로고" />
      </S.box>
    </S.content>
  );
};

export default LodingPage;
