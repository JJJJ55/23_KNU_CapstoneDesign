import axios from 'axios';

export const CommuRead = async (itemIdx) => {
  try {
    // 서버에 GET 요청을 보내어 해당 아이템의 데이터를 가져옴
    const response = await axios.get(
      `https://daishi7462.cafe24.com/php/CommuRead.php?idx=${itemIdx}`,
    );
    return response.data;
  } catch (error) {
    console.error('데이터 가져오기 실패:', error);
  }
};

export const CommuUpdate = async (inputs) => {
  try {
    // Axios를 사용하여 PHP 스크립트에 데이터를 전송
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/CheckCommuPassword.php',
      {
        itemIdx: inputs.index,
        password: inputs.pw,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    alert('비밀번호 확인 중 오류가 발생했습니다.');
  }
};

export const CommuModifyRead = async (itemIdx) => {
  try {
    // 서버에 GET 요청을 보내어 해당 아이템의 데이터를 가져옴
    const response = await axios.get(
      `https://daishi7462.cafe24.com/php/CommuRead.php?idx=${itemIdx}`,
    );
    return response.data;
  } catch (error) {
    console.error('데이터 가져오기 실패:', error);
  }
};
