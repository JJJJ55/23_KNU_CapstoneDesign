import React, { useState, useEffect } from 'react'; // import 추가
import styled from 'styled-components';
import Button from '../common/Button';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

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
  const navigate = useNavigate();
  const location = useLocation();
  const itemIdx = location.state.itemIdx;

  const [itemData, setItemData] = useState({
    title: '',
    content: '',
    password: '',
  });

  useEffect(() => {
    // 이펙트 함수를 통해 데이터를 가져옵니다.
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // 서버에 GET 요청을 보내어 해당 아이템의 데이터를 가져옴
      const response = await axios.get(
        `https://daishi7462.cafe24.com/php/community.php?idx=${itemIdx}`,
      );
      const data = response.data;

      // 데이터를 state에 저장
      setItemData(data);
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };

  const handleUpdateClick = async () => {
    try {
      // Axios를 사용하여 PHP 스크립트에 데이터를 전송
      const response = await axios.post(
        'https://daishi7462.cafe24.com/php/modify_content.php',
        {
          itemIdx,
          title: itemData.title,
          content: itemData.content,
          password: itemData.password,
        },
      );

      // 서버에서의 응답 처리
      if (response.data.success) {
        // 성공한 경우 커뮤니티 페이지로 이동
        navigate(`/commu`);
      }
    } catch (error) {
      console.error(error);
      alert('글을 수정하는 중 오류가 발생했습니다.');
    }
  };

  return (
    <>
      <S.TitleInput
        type="text"
        maxLength="30"
        placeholder="제목을 입력하세요."
        value={itemData.title}
        onChange={(e) => setItemData({ ...itemData, title: e.target.value })}
      />
      <S.Text
        type="text"
        maxLength="1000"
        placeholder="내용을 입력하세요."
        value={itemData.content}
        onChange={(e) => setItemData({ ...itemData, content: e.target.value })}
      />
      <S.Box>
        <S.PwInput
          type="password"
          maxLength="20"
          placeholder="비밀번호를 입력하세요."
          value={itemData.password}
          onChange={(e) =>
            setItemData({ ...itemData, password: e.target.value })
          }
        />
        <S.ButtonBox onClick={handleUpdateClick}>
          <Button text={'수정하기'} />
        </S.ButtonBox>
      </S.Box>
    </>
  );
};

export default Make;
