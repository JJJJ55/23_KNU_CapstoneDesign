import React from 'react';
import styled from 'styled-components';

const S = {
  textClick: styled.a`
    text-decoration: none;
    font-size: 16px;
    color: white;
    font-weight: bold;
  `,
};
const A = (text) => {
  return <S.textClick href="/">{text}</S.textClick>;
};

export default A;
