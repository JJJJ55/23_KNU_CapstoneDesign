import React from 'react';
import styled from 'styled-components';
import RegisterPage from '../../pages/register/RegisterPage';
import ButtonLong from '../common/ButtonLong';
import ButtonMain from '../common/ButtonMain';

const S = {
  container: styled.div`
    position: relative;
    width: 390px;
    height: 200px;
    z-index: 10 !important;
  `,
  cummuticate: styled.div`
    width: 340px;
    height: auto;
    margin: 20px auto;
    text-align: center;
  `,
};

const Section4 = () => {
  return (
    <S.container>
      <S.cummuticate>
        <ButtonMain text={'프로젝트 소개'} />
        <ButtonMain text={'유저 커뮤니티'} />
        <ButtonMain text={'주변 정비소 안내'} />
      </S.cummuticate>
    </S.container>
  );
};

export default Section4;
