import React from 'react';
import styled from 'styled-components';
import Icon1 from '../../assets/img/imgUpload.png';
import Icon2 from '../../assets/img/imgUpload_icon.png';
import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
const S = {
  NumBox: styled.div`
    width: 350px;
    display: flex;
    align-items: center;
    margin: 0 auto;
  `,
  Guide: styled.p`
    font-size: 15px;
    font-weight: Bold;
  `,
  SelectDamage: styled.div`
    display: flex;
    width: 100px;
    height: 30px;
    margin: 0 auto;
    border-radius: 10px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
  `,
  Box: styled.div`
    width: 350px;
    height: 300px;
    margin: 10px auto;
  `,
  ImgBox: styled.div`
    width: 200px;
    height: 200px;
    margin: 40px auto;
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

const ImgUpload = () => {
  const [selectedImage, setSelectedImage] = useState(Icon1);
  const fileInputRef = useRef(null); // useRef를 생성
  const DamageSelect = useLocation();

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
        <S.Guide>1. 선택된 손상부위 입니다.</S.Guide>
        <S.SelectDamage>{DamageSelect.state}</S.SelectDamage>
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
