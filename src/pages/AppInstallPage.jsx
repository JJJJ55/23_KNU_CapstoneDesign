import React from 'react';
import styled from 'styled-components';
import img from '../assets/img/Install.png';
import { useNavigate } from 'react-router-dom';

const S = {
  content: styled.main`
    height: 100vh;
    background-color: #fff;
    justify-content: center;
  `,
  installImg: styled.img`
    width: 350px;
    height: 350px;
  `,
  errorText: styled.p`
    font-size: 20px;
    font-family: '공체Bold' !important;
    margin-bottom: 30px;
  `,
  GoHome: styled.button`
    width: 200px;
    height: 50px;
    background-color: #c7c7c7;
    border-radius: 15px;
    font-size: 20px;
    font-family: '공체Bold' !important;
  `,
};

const AppInstallPage = () => {
  return (
    <S.content>
      <S.installImg src={img} />
    </S.content>
  );
};

export default AppInstallPage;
