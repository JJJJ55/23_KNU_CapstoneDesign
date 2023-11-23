import React from 'react';
import styled from 'styled-components';
import MainButton from '../MainButton/MainButton';

const S = {
  container: styled.div`
    width: 100%;
    height: 150px;
    z-index: 10 !important;
    margin-bottom: 25px;
  `,
};

const Section3 = () => {
  return (
    <S.container>
      <MainButton />
    </S.container>
  );
};

export default Section3;
