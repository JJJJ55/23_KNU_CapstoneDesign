import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { CommuRead, CommuUpdate } from '../../lib/apis/CommuReadApi';
import { CommuDeleteApi } from '../../lib/apis/CommuDeleteApi';

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
    width: auto;
    height: auto;
    position: relative;
  `,
  Box: styled.div`
    position: relative;
    width: 370px;
    height: auto;
    border-radius: 10px;
    margin: 10px auto;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
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
  const [itemData, setItemData] = useState({
    title: '',
    content: '',
    email: '',
  });
  // const [password, setPassword] = useState('');
  const [data, setData] = useState({
    index: idx,
    pw: '',
  });

  useEffect(() => {
    // 이펙트 함수를 통해 데이터를 가져옵니다.
    GetCommuRead(idx);
  }, []);

  console.log(data.index, data.pw);
  const GetCommuRead = async (idx) => {
    try {
      const response = await CommuRead(idx);
      setItemData(response);
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };

  // const GetCommuUpdate = (data) => async () => {
  //   console.log(data.index, data.pw);
  //   try {
  //     const response = await CommuUpdate(data);
  //     // 서버에서의 응답 처리
  //     if (response.success) {
  //       // 비밀번호가 일치하는 경우 수정 페이지로 이동
  //       console.log(
  //         '현재 유저',
  //         response.name === localStorage.getItem('username'),
  //       );
  //       console.log(response.name);
  //       if (response.name === localStorage.getItem('username')) {
  //         navigate('/commu/modify', { state: { idx } });
  //       } else {
  //         alert('해당 게시글 작성자만 수정이 가능합니다!');
  //       }
  //     } else {
  //       alert('비밀번호가 일치하지 않습니다.');
  //     }
  //   } catch (error) {
  //     console.error('데이터 가져오기 실패:', error);
  //   }
  // };
  const GetCommuMoodify = () => {
    if (itemData.email === localStorage.getItem('id')) {
      navigate('/commu/modify', { state: { idx } });
    } else {
      alert('잘못되니 접근입니다.');
    }
  };

  const DeleteCommu = (idx) => async () => {
    const confirmation = window.confirm('정말로 삭제하시겠습니까?');
    if (confirmation) {
      try {
        console.log('zz', idx);
        const response = await CommuDeleteApi(idx);
        if (response.success) {
          console.log(response.message);
          navigate('/commu');
        } else {
          console.log(response.message);
        }
      } catch (error) {
        console.error('삭제에 실패했습니다:', error);
      }
    }
  };

  // const handleDeleteClick = async (idx) => {
  //   const confirmation = window.confirm('정말로 삭제하시겠습니까?');
  //   if (confirmation) {
  //     await DeleteCommu(idx); // '예'를 눌렀을 때만 실행
  //   }
  // };

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
        {/* <S.PwInput
          name="pw"
          type="password"
          maxlength="20"
          placeholder="비밀번호를 입력하세요."
          value={data.pw}
          onChange={InputChange}
        /> */}

        {itemData.email === localStorage.getItem('id') ? (
          <S.ButtonBox>
            <Button text={'수 정'} onClick={GetCommuMoodify} />
          </S.ButtonBox>
        ) : (
          <S.ButtonBox />
        )}

        {itemData.email === localStorage.getItem('id') ? (
          <S.ButtonBox>
            <Button text={'삭 제'} onClick={DeleteCommu(idx)} />
          </S.ButtonBox>
        ) : (
          <S.ButtonBox />
        )}
        <S.ButtonBox>
          <Button
            text={'이 전'}
            onClick={() => {
              navigate('/commu');
            }}
          />
        </S.ButtonBox>
      </S.Box>
      {/* <S.PN></S.PN> */}
    </>
  );
};

export default Read;
