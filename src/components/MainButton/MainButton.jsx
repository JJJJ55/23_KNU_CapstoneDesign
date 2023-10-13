import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import car1 from '../../assets/img/logo.png';
import car2 from '../../assets/img/logo.png';
import car3 from '../../assets/img/logo.png';

const S = {
  ButtonBox: styled.div`
    background-color: red;
    width: 340;
    height: 300;
    margin: 0 auto;
  `,
  CarButton: styled.img`
    width: 120px;
    height: 110px;
    border-radius: 30px;
    box-shadow: 1px 1px 3px 3px #143c56;
    &:active {
      box-shadow: 1px 1px 3px 1px #dadce0 inset;
    }
  `,
  MenuBox: styled.div`
    width: 390px;
  `,

  Menu: styled.div`
    max-width: 360px;
    margin: 0 auto;
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
  `,

  MenuList: styled.a`
    text-decoration: none;
    color: #fff;
    display: inline-block;
    font-size: 10px;
    opacity: 0.8;
    padding: 20px 0;
    text-align: center;
  `,
};
const StyledSlider = styled(Slider)`
  .slick-list {
    margin: -20px;
  }

  .slick-slide {
    padding: 20px;
  }
  .slick-slide {
    padding-right: 30px;
    padding-left: 30px;
  }
  .slick-next:before {
    display: none !important;
  }
  .slick-prev:before {
    display: none !important;
  }
  .slick-arrow.slick-prev {
    display: none !important;
  }
  .slick-arrow.slick-next {
    display: none !important;
  }
`;
const MainButton = () => {
  const ImgButton = [{ car1 }, { car2 }, { car3 }];
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <S.MenuBox>
      <S.Menu>
        <StyledSlider {...settings}>
          <S.CarButton src={car1} />
          <S.CarButton src={car2} />
          <S.CarButton src={car3} />
        </StyledSlider>
      </S.Menu>
    </S.MenuBox>
  );
};

export default MainButton;
