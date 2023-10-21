import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { CommuReadApi } from '../../lib/apis/CommuReadApi';

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

  PN: styled.div`
    width: 300px;
    height: 50px;
    margin: 0 auto;
    border: 1px solid green;
    margin: 10px auto;
  `,
  ButtonBox: styled.div`
    display: flex;
    width: 80px;
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
    width: 200px;
    height: 32px;
    border: solid 1px #dadada;
    border-radius: 10px;
    padding: 5px;
    box-sizing: border-box;
    background: #fff;
    position: relative;
  `,
};

const Read = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const idx = location.state.itemIdx;

  const [itemData, setItemData] = useState({ title: '', content: '' });

  useEffect(() => {
    // 이펙트 함수를 통해 데이터를 가져옵니다.
    GetCommuRead(idx);
  }, []);

  const GetCommuRead = async (idx) => {
    try {
      const response = await CommuReadApi(idx);
      setItemData(response);
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };

  return (
    <>
      <S.TitleInput
        type="text"
        maxlength="30"
        placeholder="제목을 입력하세요."
        value={itemData.title}
        readOnly
      />
      <S.Text
        type="text"
        maxlength="1000"
        placeholder="내용을 입력하세요."
        value={itemData.content}
        readOnly
      />
      <S.Box>
        <S.PwInput
          type="password"
          maxlength="20"
          placeholder="비밀번호를 입력하세요."
        />
        <S.ButtonBox>
          <Button text={'수 정'} />
        </S.ButtonBox>
        <S.ButtonBox>
          <Button
            text={'이 전'}
            onClick={() => {
              navigate('/commu');
            }}
          />
        </S.ButtonBox>
      </S.Box>
      <S.PN></S.PN>
    </>
  );
};

export default Read;
