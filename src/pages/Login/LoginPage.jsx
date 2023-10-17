import React from 'react';
import styled from 'styled-components';
import InfoForm from '../../components/common/InfoForm';

const S = {
  content: styled.main`
    justify-content: flex-start;
    margin-top: 50px;
  `,
};

const LoginPage = () => {
  return (
    <S.content>
      <InfoForm type="login" />
    </S.content>
  );
};

export default LoginPage;
