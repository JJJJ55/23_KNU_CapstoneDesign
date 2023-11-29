import React from 'react';
import styled from 'styled-components';
import SideMenuBar from '../../components/SideMenu/SideMenuBar';
import Logo from '../../assets/img/후면로고.png';
import { useState } from 'react';
import '../../assets/font/Font.css';
import Footer from '../../components/Main/Footer';
import MapBox from '../../components/CarMap/MapBox';
import { useNavigate } from 'react-router-dom';
import SideModal from '../../components/Modal/SideModal';

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
  content: styled.main`
    height: 100%;
    justify-content: flex-start;
    background-color: white;
    box-shadow: 0px 0px 30px #000;
  `,
  Frame: styled.div`
    width: 390px;
    height: 100svh;
    position: relative;
    margin: 0 auto;
    background-color: #fff;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  Main: styled.div`
    /* width: 390px; */
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
    width: 99%;
    display: block;
    margin: 10px auto;
    border: 3px solid black;
  `,
};

const MapPage = () => {
  const [sideOn, setSideOn] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
    setSideOn(!sideOn);
  };

  const navigate = useNavigate();
  return (
    <>
      <S.content>
        <H.MainBox>
          <H.MenuBox>
            <H.Menu>
              <H.Logo src={Logo} onClick={() => navigate('/main')} />
              <SideMenuBar
                onclick={handleModalToggle}
                color={'#000'}
                check={sideOn}
              />
            </H.Menu>
          </H.MenuBox>
        </H.MainBox>
        <S.Main>
          <S.Title>주변 정비소 안내</S.Title>
          <S.SubTitle>주변 정비소를 찾아보세요</S.SubTitle>
          <S.FormLine />
          <MapBox />
          <Footer />
        </S.Main>
      </S.content>

      <SideModal isOpen={sideOn} onRequestClose={handleModalToggle} />
    </>
  );
};

export default MapPage;
