import axios from 'axios';

export const ChangePassword = async (email, inputs) => {
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/ModifyPassword.php',
      {
        id: email,
        password: inputs.current_pw,
        newPassword: inputs.new_pw,
      },
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
