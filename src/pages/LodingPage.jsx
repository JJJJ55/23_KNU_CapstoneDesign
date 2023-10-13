import React from 'react';
import styled from 'styled-components';
import mainLogo from '../assets/img/메인로고.png';

const S = {
  content: styled.main`
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
  return (
    <S.content>
      <S.box>
        <img src={mainLogo} alt="로고" />
      </S.box>
    </S.content>
  );
};

export default LodingPage;
