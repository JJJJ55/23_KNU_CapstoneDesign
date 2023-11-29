import styled from 'styled-components';
import Logo from '../../assets/img/메인로고.png';
import Footer from '../../components/Main/Footer';
import Section1 from '../../components/Main/Section1';
import Section2 from '../../components/Main/Section2';
import Section3 from '../../components/Main/Section3';
import { useState } from 'react';
import SideMenuBar from '../../components/SideMenu/SideMenuBar';
import Section4 from '../../components/Main/Section4';
import { useNavigate } from 'react-router-dom';
import SideModal from '../../components/Modal/SideModal';

const H = {
  MainBox: styled.header`
    position: fixed;
    width: 390px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
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
    height: 100vh;
    display: flex;
    position: relative;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0px 0px 30px #000;
    flex-direction: column;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

const MainPage = () => {
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
                color={'#fff'}
                check={sideOn}
              />
            </H.Menu>
          </H.MenuBox>
        </H.MainBox>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </S.content>
      <SideModal isOpen={sideOn} onRequestClose={handleModalToggle} />
    </>
  );
};
export default MainPage;
