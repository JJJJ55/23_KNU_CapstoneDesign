import axios from 'axios';

export const ChangePassword = async (email, inputs) => {
  console.log(email, inputs.new_pw);
  try {
    console.log(email, inputs.new_pw);
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/ModifyPassword.php',
      {
        id: email,
        password: inputs.new_pw,
      },
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
