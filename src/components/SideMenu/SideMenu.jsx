import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import sideImg from '../../assets/img/logo-removebg-preview.png';
import Button from '../common/Button';
import SideMenuFooter from './SideMenuFooter';

const A = {
  sidemenu: styled.div`
    z-index: 1000 !important;
    width: 390px;
    height: 90%;
    position: absolute;
    bottom: ${(props) => (props.sideOn ? '0' : '-120%')};
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
  `,
  NameBox: styled.div`
    position: relative;
    margin-top: 5px;
    padding: 10px;
    bottom: 50px;
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
    width: 390px;
    height: 300px;
    margin-top: 50px;
    font-size: 15px;
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
  MenuList: styled.a`
    width: 120px;
    text-decoration: none;
    color: #000;
    display: block;
    font-size: 15px;
    opacity: 0.8;
    padding: 10px 0;
    text-align: center;
    margin: 20px auto;
    border-bottom: 1px solid black;
  `,
};

const SideMenu = ({ sideOn }) => {
  return (
    <A.sidemenu sideOn={sideOn}>
      <A.Sideimg />
      <A.NameBox>
        <A.Name>오진영</A.Name>님 환영합니다.
        <br />
        <br />
        <Button text={'로그아웃'} />
      </A.NameBox>
      <A.Sidebox>
        차 진단도, 수리비도 똑똑하게
        <A.SideTitle>리:페어</A.SideTitle>
        <A.MenuList>
          <A.MenuSpan>프로젝트</A.MenuSpan> 소개
        </A.MenuList>
        <A.MenuList>
          유저 <A.MenuSpan>커뮤니티</A.MenuSpan>
        </A.MenuList>
        <A.MenuList>
          <A.MenuSpan>차량수리비</A.MenuSpan> 안내
        </A.MenuList>
        <A.MenuList>
          주변 <A.MenuSpan>정비소</A.MenuSpan> 안내
        </A.MenuList>
      </A.Sidebox>
      <SideMenuFooter />
    </A.sidemenu>
  );
};

export default SideMenu;
