import React from 'react';
import styled from 'styled-components';
import Icon1 from '../../assets/img/imgUpload.png';
import Icon2 from '../../assets/img/imgUpload_icon.png';
import { useRef } from 'react';
import { useState } from 'react';
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
  const [selectedImage, setSelectedImage] = useState(Icon1);
  const fileInputRef = useRef(null); // useRef를 생성

  // 이미지 선택 시 호출되는 핸들러
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 선택한 파일을 미리보기로 표시
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
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
        <S.Guide>2. 파손부위 사진을 업로드 해주세요</S.Guide>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
          ref={fileInputRef} // ref를 useRef로 연결
        />
        <S.ImgBox onClick={() => fileInputRef.current.click()}>
          <S.ImgIcon src={selectedImage} />
          <S.UploadIcon src={Icon2} />
        </S.ImgBox>
      </S.Box>
      <S.Button>차량 진단하기</S.Button>
    </>
  );
};

export default ImgUpload;
