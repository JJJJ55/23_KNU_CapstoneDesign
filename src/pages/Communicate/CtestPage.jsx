import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [data, setData] = useState([]);
  const emailToDelete = 'wlsdud6221@naver.com'; // 삭제하려는 이메일 주소
  const savedEmail = localStorage.getItem('id'); // 로컬 스토리지에서 이메일 가져오기

  useEffect(() => {
    // 데이터를 가져오고 설정
    const savedData = localStorage.getItem('yourDataKey');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  const handleDelete = () => {
    // 삭제 동작을 수행
    console.log('삭제');

    // 여기에 삭제 로직을 추가하세요.
    // 예를 들어, 서버에 삭제 요청을 보낼 수도 있습니다.

    // 삭제가 성공하면 상태 업데이트
    const updatedData = data.filter((item) => item.email !== emailToDelete);
    setData(updatedData);

    // 로컬 스토리지에서도 삭제
    localStorage.setItem('yourDataKey', JSON.stringify(updatedData));
  };

  const handleDeleteButtonClick = () => {
    const confirmation = window.confirm('정말로 삭제하시겠습니까?');
    if (confirmation) {
      handleDelete(); // 삭제 동작 실행
    }
  };

  // emailToDelete와 로컬 스토리지의 이메일이 일치할 때만 버튼을 표시
  const showDeleteButton = savedEmail === emailToDelete;

  return (
    <div>
      {/* emailToDelete와 일치할 때만 버튼을 표시 */}
      {showDeleteButton && (
        <button onClick={handleDeleteButtonClick}>삭제</button>
      )}

      {/* 데이터 목록 또는 컴포넌트를 여기에 표시 */}
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default YourComponent;
