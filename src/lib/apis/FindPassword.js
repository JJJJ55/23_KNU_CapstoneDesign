import axios from 'axios';

export const FindPassword = async (inputs) => {
  try {
    console.log(inputs.id);
    const response = await axios.get(
      'https://daishi7462.cafe24.com/php/FindPassword.php',
      {
        name: inputs.name,
        email: inputs.id,
      },
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
