import React from 'react';
import styled from 'styled-components';
import Icon1 from '../../assets/img/imgUpload.png';
import Icon2 from '../../assets/img/imgUpload_icon.png';
const S = {
  NumBox: styled.div`
    width: 350px;
    display: flex;
    border: 1px solid blue;
    align-items: center;
    margin: 0 auto;
  `,
  Guide: styled.p`
    font-size: 15px;
    font-weight: Bold;
  `,
  Box: styled.div`
    width: 350px;
    height: 300px;
    border: 1px solid red;
    margin: 10px auto;
  `,
  Combo: styled.select`
    width: 100px;
    height: 30px;
    margin: 0 auto;
    border-radius: 10px;
    font-weight: bold;
    text-align: center;
    appearance: none;
    -webkit-appearance: none;
    &::-ms-expand {
      display: none;
    }
  `,
  ImgBox: styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid red;
    margin: 20px auto;
    position: relative;
    cursor: pointer;
  `,
  ImgIcon: styled.img`
    width: 200px;
    height: 200px;
  `,
  UploadIcon: styled.img`
    width: 70px;
    height: 70px;
    position: absolute;
    bottom: 0;
    right: 0;
  `,
  Button: styled.button`
    display: block;
    width: 200px;
    height: 40px;
    font-weight: Bold;
    font-size: 20px;
    border-radius: 10px;
    background-color: #e2e2e2;
    margin: 0 auto;
    &:hover {
      background-color: #bcbaba;
    }
  `,
};

const S_ImgUploadBox = styled.div`
  width: 114px;
  height: 112px;
  margin: 35px;
  position: relative;
  label {
    display: none;
  }
`;
const S_ImgInput = styled.input`
  display: none;
`;
const S_ProfileImg = styled.img`
  width: 114px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
const S_UploadIcon = styled.img`
  width: 36px;
  height: 36px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 10;
  cursor: pointer;
`;

const ImgUpload = () => {
  return (
    <>
      <S.NumBox>
        <S.Guide>1. 차종을 선택해주세요</S.Guide>
        <S.Combo>
          <option>휠</option>
          <option>휀더</option>
          <option>앞 범퍼</option>
          <option>뒷 범퍼</option>
          <option>도어</option>
        </S.Combo>
      </S.NumBox>
      <S.Box>
        {/* <S_ImgUploadBox
					onClick={() => {
						photoInput.current.click();
					}}
				>
					<label htmlFor="image"></label>
					<S_ImgInput
						name="image"
						ref={photoInput}
						accept="image/*"
						onChange={handleImgChange}
						type="file"
						id="image"
					/>
					<S_ProfileImg src={currentImg || userInfo.image || defaultProfileImg} alt="기본프로필사진" />
					<S_UploadIcon src={iconSrc} />
				</S_ImgUploadBox> */}
        <S.Guide>2. 파손부위 사진을 업로드 해주세요</S.Guide>
        <S.ImgBox>
          <S.ImgIcon src={Icon1} />
          <S.UploadIcon src={Icon2} />
        </S.ImgBox>
      </S.Box>
      <S.Button>차량 진단하기</S.Button>
    </>
  );
};

export default ImgUpload;
