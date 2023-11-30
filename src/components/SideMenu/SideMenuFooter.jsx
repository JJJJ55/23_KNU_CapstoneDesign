import React from 'react';
import styled from 'styled-components';
import main_Logo2 from '../../assets/img/메인로고.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const S = {
  Footer: styled.footer`
    position: absolute;
    height: 150px;
    width: 100%;
    bottom: 0px;
  `,

  Info: styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: #143c56;
  `,

  InfoBox: styled.div`
    display: block;
    width: auto;
    height: auto;
    margin: 10px 20px;
    cursor: default;
  `,

  InfoLogo: styled.img`
    position: relative;
    width: 150px;
    height: 50px;
  `,

  InfoList: styled.a`
    color: white;
    display: inline-block;
    font-size: 10px;
    margin-right: 10px;
    &::after {
      background: white;
      content: '';
      display: inline-block;
      height: 7px;
      margin-left: 10px;
      vertical-align: 2px;
      width: 1px;
    }
  `,

  InfoText: styled.p`
    color: white;
    font-size: 10px;
    margin-top: 16px;
    text-align: center;
    cursor: default;
  `,
};

const SideMenuFooter = () => {
  return (
    <S.Footer>
      <S.Info>
        <S.InfoBox>
          <S.InfoLogo src={main_Logo2}></S.InfoLogo>
        </S.InfoBox>
        <S.InfoBox>
          <S.InfoText>
            2023년 공주대학교 캡스톤디자인 프로젝트
            <br />
            컴퓨터공학부 소프트웨어전공 오진영, 오승민, 이삭
          </S.InfoText>
        </S.InfoBox>
        <S.InfoText>
          © 2023 Re:pair from KNU Capstone Design All right reserved.
        </S.InfoText>
      </S.Info>
    </S.Footer>
  );
};

export default SideMenuFooter;
