import React from 'react';
import styled from 'styled-components';
import img from '../assets/img/Install.png';

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
};

const AppInstallPage = () => {
  return (
    <S.content>
      <S.installImg src={img} />
    </S.content>
  );
};

export default AppInstallPage;
