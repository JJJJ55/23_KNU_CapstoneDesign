import axios from 'axios';

export const ImgUploadApi = async (file, parts) => {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('parts', parts);
  console.log('보낼 데이터', formData);
  console.log('보낼 데이터', file);
  console.log('보낼 데이터', parts);
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/predit',
      {
        formData,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
