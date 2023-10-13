import { BrowserRouter, Link, Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './pages/HomePage.jsx';
import GlobalStyle from './style/GlobalStyle.js';
import RegisterPage from './pages/register/RegisterPage.jsx';
import LoginPage from './pages/Login/LoginPage.jsx';
import LodingPage from './pages/LodingPage.jsx';
import MainPage from './pages/Main/MainPage.jsx';
import IntroPage from './pages/Intro/IntroPage.jsx';
import CommuPage from './pages/Communicate/CommuPage.jsx';
import ReadPage from './pages/Communicate/ReadPage.jsx';
import WritePage from './pages/Communicate/WritePage.jsx';
import CarPage from './pages/CarDamage/CarPage.jsx';

const S = {
  Frame: styled.div`
    max-width: 390px;
    height: 100vh;
    display: flex;
    position: relative;
    margin: 0 auto;
    background-color: #b8e0fe;
    box-shadow: 0px 0px 30px #000;
    flex-direction: column;
    /* justify-content: center; */
  `,

  Background: styled.div`
    //화면 밖 배경
    width: 100vw;
    height: 100vh;
    background: #f7f7f7;
    position: absolute;
    font-size: 80px;
    line-height: 70px;
    font-family: 'Racing Sans One';
  `,
};

function App() {
  return (
    <>
      <GlobalStyle />
      <S.Background />
      <S.Frame>
        {/* <LodingPage /> */}
        {/* <HomePage /> */}
        {/* <RegisterPage /> */}
        {/* <LoginPage /> */}
        {/* <MainPage /> */}
        {/* <IntroPage /> */}
        {/* <CommuPage /> */}
        {/* <ReadPage /> */}
        {/* <WritePage /> */}
        <CarPage />
      </S.Frame>
    </>
  );
}
export default App;
