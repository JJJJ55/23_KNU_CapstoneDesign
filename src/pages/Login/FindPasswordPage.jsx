import React from 'react';
import styled from 'styled-components';
import InfoForm from '../../components/common/InfoForm';
import { useNavigate } from 'react-router-dom';
import { FindPassword } from '../../lib/apis/FindPassword';
const S = {
  content: styled.main`
    justify-content: flex-start;
    margin-top: 50px;
    height: 100svh;
  `,
  FindPw: styled.button`
    width: 80px;
    height: 35px;
    margin-top: 5px;
    position: relative;
    margin-left: 242px;
    cursor: pointer;
  `,
};

const FindPasswordPage = () => {
  const navigate = useNavigate();

  const handleFindPw = async (inputs) => {
    try {
      const response = await FindPassword(inputs);
      if (response.success) {
        alert('메일에 임시 비밀번호를 발급해드렸습니다.');
        navigate('/home');
      } else {
        alert('발급도중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.content>
      <InfoForm type="find" onSubmit={handleFindPw} />
    </S.content>
  );
};

export default FindPasswordPage;
