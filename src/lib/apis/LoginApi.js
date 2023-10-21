import axios from 'axios';

export const LoginApi = async (inputs) => {
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/sign_in.php',
      {
        email: inputs.id,
        password: inputs.pw,
      },
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // 에러를 호출한 곳으로 전파
  }
};
