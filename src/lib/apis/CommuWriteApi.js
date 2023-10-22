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
  console.log('수정', inputs.title, inputs.content, inputs.password);
  try {
    console.log('수정', inputs.title, inputs.content, inputs.password);
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/modify_content.php',
      {
        title: inputs.title,
        content: inputs.content,
        password: inputs.password,
      },
    );
    console.log('수정', inputs.title, inputs.content, inputs.password);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
