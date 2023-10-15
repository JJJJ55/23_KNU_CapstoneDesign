import React from 'react';
import styled from 'styled-components';

const S = {
  Box: styled.div`
    width: 350px;
    height: 230px;
    border: 1px solid red;
    margin: 0 auto;
    text-align: center;
    padding-top: 30px;
  `,
  TextBox: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `,
  FootBox: styled.div`
    margin-top: 30px;
    text-align: center;
    font-size: 11px;
    position: relative;
  `,
  Title: styled.div`
    width: 120px;
    font-weight: bold;
    font-size: 23px;
    color: #05194d;
    border: 1px solid red;
  `,
  Text: styled.div`
    width: 250px;
    font-size: 20px;
    border: 1px solid blue;
  `,
};

const CarText = () => {
  return (
    <S.Box>
      <S.TextBox>
        <S.Title>차종 : </S.Title>
        <S.Text> 아반떼</S.Text>
      </S.TextBox>
      <S.TextBox>
        <S.Title>파손부위 : </S.Title>
        <S.Text> 앞 범퍼</S.Text>
      </S.TextBox>
      <S.TextBox>
        <S.Title>수리방법 : </S.Title>
        <S.Text> 도색</S.Text>
      </S.TextBox>
      <S.TextBox>
        <S.Title>수리비용 : </S.Title>
        <S.Text> 900,000원</S.Text>
      </S.TextBox>
      <S.FootBox>
        본 모델은 실 가격과 상이할 수 있으니 참고용으로 보시기 바랍니다.
      </S.FootBox>
    </S.Box>
  );
};

export default CarText;
