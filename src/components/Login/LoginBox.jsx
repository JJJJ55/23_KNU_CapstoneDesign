import React from 'react';
import styled, { keyframes } from 'styled-components';
import mainLogo from '../../assets/img/메인로고.png';
import gitLogo from '../../assets/img/Git.png';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    bottom: -300px;
  }
  to {
    bottom: 0;
  }
`;

const S = {
  content: styled.main`
    height: 100svh;
    background-color: #05194d;
    justify-content: center;
  `,
  box: styled.div`
    position: relative;
    width: 300px;
    height: 100px;
    margin: 0 auto;
    img {
      position: absolute;
      width: 280px;
      height: 100px;
      margin: 0 auto;
      right: 0;
      left: 0;
      bottom: 60px;
    }
  `,
  loginContent: styled.div`
    z-index: 1;
    width: 100%;
    height: 150px;
    position: absolute;
    bottom: 0;
    /* align-self: flex-end; */
    background-color: #ffffff;
    border-radius: 80px 80px 0 0;
    animation: ${fadeIn} 1s cubic-bezier(0, 0.3, 0.66, 1.02);
    color: #767676;
    text-align: center;
  `,
  tagBox: styled.div`
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 90px;
  `,
  tag: styled(Link)`
    text-decoration: none;
    text-decoration-line: underline;
    font-size: 16px;
    color: #a0a0a0;
    margin: 20px;
  `,
  textBox: styled.p`
    font-size: 12px;
    color: #a0a0a0;
    position: absolute;
    bottom: 50px;
    right: 0;
    left: 0;
    cursor: default;
  `,
  GitBox: styled.div`
    position: absolute;
    width: 100%;
    bottom: 15px;
  `,
  GitImg: styled.img`
    width: 25px;
    height: 25px;
    display: inline-block;
  `,

  GitLink: styled.a`
    text-decoration: none;
    font-size: 12px;
    height: 25px;
    color: #a0a0a0;
    display: inline-block;
    line-height: 25px;
    margin-left: 10px;
    cursor: pointer;
  `,
};

const LoginBox = () => {
  return (
    <>
      <S.content>
        <S.box>
          <img src={mainLogo} alt="로고" />
        </S.box>
        <S.loginContent>
          <S.tagBox>
            <S.tag to={'/login'}>이메일로 로그인</S.tag>
            <S.tag to={'/register'}>회원가입</S.tag>
          </S.tagBox>
          <S.textBox>차량 파손도 예측 및 수리비 안내 플랫폼</S.textBox>
          <S.GitBox>
            <S.GitImg src={gitLogo} />
            <S.GitLink
              href="https://github.com/orgs/23-KNU-CapstoneDesign/repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Re:pair 깃허브 바로가기
            </S.GitLink>
          </S.GitBox>
        </S.loginContent>
      </S.content>
    </>
  );
};

export default LoginBox;
