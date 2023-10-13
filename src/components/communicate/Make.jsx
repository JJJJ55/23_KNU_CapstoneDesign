import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const S = {
  InputBox: styled.div`
    display: block;
    width: 370px;
    height: 40px;
    border: solid 1px #dadada;
    border-radius: 10px;
    padding: 5px;
    box-sizing: border-box;
    background: #fff;
    position: relative;
    margin: 0 auto;
  `,
  ButtonBox: styled.div`
    width: auto;
    height: auto;
    position: relative;
    text-align: right;
    margin-left: 5px;
  `,
  Box: styled.div`
    position: relative;
    width: 370px;
    height: auto;
    border-radius: 10px;
    margin: 10px auto;
    display: flex;
    align-items: center;
  `,
  TitleInput: styled.input`
    display: block;
    width: 370px;
    height: 40px;
    border: solid 1px #dadada;
    border-radius: 10px;
    padding: 5px;
    box-sizing: border-box;
    background: #fff;
    position: relative;
    margin: 5px auto;
  `,
  Text: styled.input`
    display: block;
    width: 370px;
    height: 300px;
    border: solid 1px #dadada;
    border-radius: 10px;
    padding: 5px;
    box-sizing: border-box;
    background: #fff;
    position: relative;
    margin: 5px auto;
  `,
  PwInput: styled.input`
    display: block;
    width: 300px;
    height: 32px;
    border: solid 1px #dadada;
    border-radius: 10px;
    padding: 5px;
    box-sizing: border-box;
    background: #fff;
    position: relative;
  `,
};

const Make = () => {
  return (
    <>
      <S.TitleInput
        type="text"
        maxlength="30"
        placeholder="제목을 입력하세요."
      />
      <S.Text type="text" maxlength="1000" placeholder="내용을 입력하세요." />
      <S.Box>
        <S.PwInput
          type="password"
          maxlength="20"
          placeholder="비밀번호를 입력하세요."
        />
        <S.ButtonBox>
          <Button text={'등 록 하 기'} />
        </S.ButtonBox>
      </S.Box>
    </>
  );
};

export default Make;
