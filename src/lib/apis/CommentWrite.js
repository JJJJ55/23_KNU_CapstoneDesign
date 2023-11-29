import axios from 'axios';

export const CommentUpdate = async (inputs) => {
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/CommentWrite.php',
      {
        post_idx: inputs.idx,
        name: inputs.user,
        content: inputs.comment,
        email: inputs.email,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const ReplyUpdate = async (inputs) => {
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/ReplyWrite.php',
      {
        post_idx: inputs.idx,
        comment_id: inputs.comment_id,
        name: inputs.user,
        content: inputs.comment,
        email: inputs.email,
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
