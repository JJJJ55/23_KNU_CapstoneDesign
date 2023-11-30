import React, { useContext } from 'react';
import styled from 'styled-components';
import InfoForm from '../../components/common/InfoForm';
import { useNavigate } from 'react-router-dom';
import { ChangePassword } from '../../lib/apis/ChangePassword';
import { LoginDispatchContext } from '../../lib/context/LoginContext';

const S = {
  content: styled.main`
    justify-content: flex-start;
    margin-top: 50px;
    cursor: default;
  `,
};
const ChangePasswordPage = () => {
  const navigate = useNavigate();
  const { logout } = useContext(LoginDispatchContext);

  const UserPwChange = async (inputs) => {
    try {
      const response = await ChangePassword(
        sessionStorage.getItem('id'),
        inputs,
      );
      if (response.success) {
        alert('변경되었습니다! 다시 로그인해주세요.');
        logout();
        navigate('/');
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.content>
      <InfoForm type="PwChange" onSubmit={UserPwChange} />
    </S.content>
  );
};

export default ChangePasswordPage;
