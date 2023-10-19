import axios from 'axios';

export const CarmapListApi = async () => {
  try {
    const response = await axios.get(
      'https://daishi7462.cafe24.com/php/repair_shop.php',
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // 에러를 호출한 곳으로 전파
  }
};
