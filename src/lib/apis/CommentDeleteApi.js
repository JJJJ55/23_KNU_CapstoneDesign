import axios from 'axios';

export const CommentDeleteApi = async (index) => {
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/CommentDelete.php',
      {
        c_id: index,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
