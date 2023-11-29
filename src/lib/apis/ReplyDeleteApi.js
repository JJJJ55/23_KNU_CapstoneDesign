import axios from 'axios';

export const ReplyDeleteApi = async (index) => {
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/ReplyDelete.php',
      {
        r_id: index,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
