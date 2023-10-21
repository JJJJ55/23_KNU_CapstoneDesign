import axios from 'axios';

export const CommuReadApi = async (itemIdx) => {
  try {
    // 서버에 GET 요청을 보내어 해당 아이템의 데이터를 가져옴
    const response = await axios.get(
      `https://daishi7462.cafe24.com/php/community.php?idx=${itemIdx}`,
    );
    return response.data;
  } catch (error) {
    console.error('데이터 가져오기 실패:', error);
  }
};
