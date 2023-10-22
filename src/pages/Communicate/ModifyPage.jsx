import React from 'react';
import styled from 'styled-components';
import SideMenuBar from '../../components/SideMenu/SideMenuBar';
import Logo from '../../assets/img/후면로고.png';
import Intro1 from '../../assets/img/Intro1.png';
import Intro2 from '../../assets/img/Intro2.png';
import Intro3 from '../../assets/img/Intro3.png';
import { useState } from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import '../../assets/font/Font.css';
import IntroImg from '../../assets/img/test.png';
import sideImg from '../../assets/img/logo-removebg-preview.png';
import Footer from '../../components/Main/Footer';
import useScrollImg from '../../hook/useScrollImg';
import Button from '../../components/common/Button';
import searchImg from '../../assets/img/icon_search.svg';
import Page from '../../components/communicate/Page';
import Read from '../../components/communicate/Read';
import Make from '../../components/communicate/Make';
import { useNavigate } from 'react-router-dom';
import { CommuModify } from '../../lib/apis/CommuWriteApi';
import Modify from '../../components/communicate/Modify';

const H = {
  MainBox: styled.header`
    position: fixed;
    width: 390px;
    height: 50px;
    background-color: #fff;
    z-index: 100;
    opacity: 0.8;
  `,

  MenuBox: styled.div`
    display: table-cell;
    vertical-align: middle;
    width: 390px;
    height: 50px;
  `,

  Menu: styled.div`
    display: flex;
    justify-content: space-between;
    width: 390px;
    height: 35px;
  `,

  Logo: styled.img`
    position: relative;
    width: 100px;
    height: 35px;
    margin-left: 20px;
    cursor: pointer;
  `,
  MenuBar: styled.div`
    width: 30px;
    height: 35px;
    border: 1px solid red;
  `,
};

const S = {
  Frame: styled.div`
    width: 390px;
    min-height: 100vh;
    position: relative;
    margin: 0 auto;
    background-color: #fff;
    overflow: auto;
    /* justify-content: center; */
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  Main: styled.div`
    width: 390px;
    height: 100%;
    position: relative;
    top: 50px;
  `,
  Title: styled.div`
    padding-top: 40px;
    padding-left: 20px;
    position: relative;
    width: 350px;
    height: 110px;
    font-size: 40px;
    color: #05194d;
    font-family: '공체Bold' !important;
  `,
  SubTitle: styled.div`
    margin-top: 20px;
    padding-left: 20px;
    position: relative;
    width: 350px;
    height: 20px;
    font-size: 15px;
    color: #05194d;
    font-family: '공체Medium' !important;
  `,
  FormLine: styled.line`
    width: 370px;
    display: block;
    margin: 10px auto;
    border: 3px solid black;
  `,
};

const ModifyPage = () => {
  const [sideOn, setSideOn] = useState(false);

  const handleSideClick = () => {
    setSideOn(!sideOn);
  };

  const handleModify = async (inputs) => {
    try {
      const response = await CommuModify(inputs);
      console.log('수정', inputs.title, inputs.content, inputs.password);
      if (response.success) {
        console.log('등록됐습니다');
        navigate('/commu');
      } else {
        console.log('등록실패');
        alert('글을 수정하는 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <S.Frame>
        <H.MainBox>
          <H.MenuBox>
            <H.Menu>
              <H.Logo src={Logo} onClick={() => navigate('/main')} />
              <SideMenuBar onclick={handleSideClick} color={'#000'} />
            </H.Menu>
          </H.MenuBox>
        </H.MainBox>
        {/*여기부터 본문요소 */}
        <S.Main>
          <S.Title>유저 커뮤니티</S.Title>
          <S.SubTitle>다양한 정보들을 공유해보세요</S.SubTitle>
          <S.FormLine />
          <Modify onSubmit={handleModify} />
          <Footer />
        </S.Main>
      </S.Frame>

      <SideMenu sideOn={sideOn} />
    </>
  );
};

export default ModifyPage;