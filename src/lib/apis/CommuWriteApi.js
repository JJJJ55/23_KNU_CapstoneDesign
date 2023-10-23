import axios from 'axios';

export const CommuWrite = async (inputs) => {
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

export const CommuModify = async (inputs) => {
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/modify_content.php',
      {
        itemIdx: inputs.itemIdx,
        title: inputs.title,
        content: inputs.content,
        password: inputs.password,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
