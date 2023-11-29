import { instance } from './instance';

export const ImgUploadApi = async (file, parts) => {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('parts', parts);
  try {
    const response = await instance.post('/predict', formData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
