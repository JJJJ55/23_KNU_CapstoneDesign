import React from 'react';
import styled from 'styled-components';

const S = {
  Box: styled.div`
    width: 350px;
    height: 300px;
    border: 1px solid red;
    margin: 0 auto;
  `,
};

const CarText = () => {
  return <S.Box></S.Box>;
};

export default CarText;
