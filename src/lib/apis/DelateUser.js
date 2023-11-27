import axios from 'axios';

export const DeleteUser = async (id) => {
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/Withdrawal.php',
      {
        email: id,
      },
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
