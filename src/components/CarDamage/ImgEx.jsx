import React, { useState, useRef } from 'react';

const ImgEx = () => {
  const [selectedImage, setSelectedImage] = useState(null);
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
    <div>
      <h2>이미지 업로드 및 미리보기</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        ref={fileInputRef} // ref를 useRef로 연결
      />
      <button onClick={() => fileInputRef.current.click()}>이미지 선택</button>
      {selectedImage && (
        <div>
          <h3>미리보기</h3>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: '100%' }}
          />
        </div>
      )}
    </div>
  );
};

export default ImgEx;
