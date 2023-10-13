import React from 'react';
import styled from 'styled-components';

const S = {
  NumBox: styled.div`
    width: 350px;
    display: flex;
    border: 1px solid blue;
    align-items: center;
    margin: 0 auto;
  `,
  Guide: styled.p`
    font-size: 15px;
    font-weight: Bold;
  `,
  Box: styled.div`
    width: 350px;
    height: 300px;
    border: 1px solid red;
    margin: 10px auto;
  `,
  Combo: styled.select`
    width: 100px;
    height: 30px;
    margin: 0 auto;
    border-radius: 10px;
    font-weight: bold;
    text-align: center;
    appearance: none;
    -webkit-appearance: none;
    &::-ms-expand {
      display: none;
    }
  `,
  Button: styled.button`
    display: block;
    width: 200px;
    height: 40px;
    font-weight: Bold;
    font-size: 20px;
    border-radius: 10px;
    background-color: #e2e2e2;
    margin: 0 auto;
    &:hover {
      background-color: #bcbaba;
    }
  `,
};

const ImgUpload = () => {
  return (
    <>
      <S.NumBox>
        <S.Guide>1. 차종을 선택해주세요</S.Guide>
        <S.Combo>
          <option>휠</option>
          <option>휀더</option>
          <option>앞 범퍼</option>
          <option>뒷 범퍼</option>
          <option>도어</option>
        </S.Combo>
      </S.NumBox>
      <S.Box>
        <S.Guide>2. 파손부위 사진을 업로드 해주세요</S.Guide>
      </S.Box>
      <S.Button>차량 진단하기</S.Button>
    </>
  );
};

export default ImgUpload;
