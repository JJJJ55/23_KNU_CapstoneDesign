import axios from 'axios';

export const CommuWriteApi = async (inputs) => {
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/community.php',
      {
        title: inputs.title,
        content: inputs.content,
        password: inputs.password,
        name: inputs.name,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
