import React from 'react';
import styled, { css } from 'styled-components';
import sideImg from '../../assets/img/logo-removebg-preview.png';
import Button from '../common/Button';
import SideMenuFooter from './SideMenuFooter';
import { useNavigate } from 'react-router-dom';
import { LoginDispatchContext } from '../../lib/context/LoginContext';
import { useContext } from 'react';
import { DeleteUser } from '../../lib/apis/DelateUser';

const A = {
  sidemenu: styled.div`
    z-index: 1000 !important;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    align-self: flex-end;
    background-color: #fff;
    border-radius: 30px 30px 0 0;
    color: #767676;
    text-align: center;
    transition: bottom 0.35s;
    box-shadow: 0px 0px 30px #000;
  `,
  Name: styled.span`
    font-size: 20px;
    font-weight: bold;
    cursor: default;
  `,
  NameBox: styled.div`
    position: relative;
    padding: 10px;
    bottom: 80px;
    cursor: default;
  `,
  Sideimg: styled.div`
    width: 390px;
    height: 400px;
    margin-top: 50px;
    background-image: url(${sideImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: -130px;
    opacity: 0.1;
  `,
  Sidebox: styled.div`
    position: absolute;
    top: 0px;
    width: 100%;
    height: 300px;
    margin-top: 50px;
    font-size: 15px;
    cursor: default;
  `,
  SideTitle: styled.h2`
    font-weight: bold;
    font-size: 30px;
    color: #05194d;
    line-height: 50px;
  `,
  MenuSpan: styled.span`
    color: #05194d;
    font-weight: bold;
  `,
  MenuList: styled.div`
    width: 120px;
    color: #000;
    display: block;
    font-size: 15px;
    opacity: 0.8;
    padding: 10px 0;
    text-align: center;
    margin: 20px auto;
    border-bottom: 1px solid black;
    cursor: pointer;
  `,
  StyledButton: styled.button`
    margin: 0 5px;
    width: 85px;
    height: 32px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    background-color: #e2e2e2;
    cursor: pointer;
    ${(props) =>
      props.active === false &&
      css`
        background-color: #f7f7f7;
        color: #000;
        :hover {
        }
        pointer-events: none;
      `}
  `,
};

const SideMenuModal = ({ sideOn }) => {
  const user = sessionStorage.getItem('username');
  const { logout } = useContext(LoginDispatchContext);
  const navigate = useNavigate();

  const UserDelete = async (id) => {
    try {
      const response = await DeleteUser(id);
      if (response.success) {
        alert('이용해주셔서 감사합니다.');
        logout();
        navigate('/');
      } else {
        alert('탈퇴 도중 문제가 발생했습니다.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  const handleChange = () => {
    navigate('/change');
  };
  const handleDelete = () => {
    if (
      window.confirm(
        '정말 회원탈퇴를 하시겠습니까?\n사용자의 커뮤니티 게시글은 탈퇴 이후에도 삭제되지 않습니다.',
      )
    ) {
      UserDelete(sessionStorage.getItem('id'));
    } else {
      return;
    }
  };

  return (
    <A.sidemenu sideOn={sideOn}>
      <A.Sideimg />
      <A.NameBox>
        <A.Name>{user}</A.Name> 님 환영합니다.
        <br />
        <br />
        <Button text={'로그아웃'} onClick={handleLogout} />
        <A.StyledButton onClick={handleChange}>비밀번호 변경</A.StyledButton>
        <Button text={'회원탈퇴'} onClick={handleDelete} />
      </A.NameBox>
      <A.Sidebox>
        차 진단도, 수리비도 똑똑하게
        <A.SideTitle>리:페어</A.SideTitle>
        <A.MenuList
          onClick={() => {
            navigate('/intro');
          }}
        >
          <A.MenuSpan>서비스</A.MenuSpan> 소개
        </A.MenuList>
        <A.MenuList
          onClick={() => {
            navigate('/commu');
          }}
        >
          유저 <A.MenuSpan>커뮤니티</A.MenuSpan>
        </A.MenuList>
        <A.MenuList
          onClick={() => {
            navigate('/car', { state: '앞 범퍼' });
          }}
        >
          <A.MenuSpan>차량수리비</A.MenuSpan> 안내
        </A.MenuList>
        <A.MenuList
          onClick={() => {
            navigate('/map');
          }}
        >
          주변 <A.MenuSpan>정비소</A.MenuSpan> 안내
        </A.MenuList>
      </A.Sidebox>
      <SideMenuFooter />
    </A.sidemenu>
  );
};

export default SideMenuModal;
