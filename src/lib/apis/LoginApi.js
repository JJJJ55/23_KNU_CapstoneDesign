// import axios from 'axios';

// export const LoginApi = async (inputs, types) => {
//   try {
//     // Axios를 사용하여 PHP 스크립트에 데이터를 전송
//     const response = await axios.post(
//       'https://daishi7462.cafe24.com/php/loginProcess.php',
//       {
//         name: inputs.name,
//         email: inputs.id,
//         password: inputs.pw,
//         type: types,
//       },
//     );

//     // 서버에서의 응답 처리
//     if (response.data.success) {
//       // 성공적으로 처리되었을 때의 동작 (예: 페이지 이동 또는 메시지 표시)
//       console.log('로그인/가입 성공');
//       //세션값 받아오는 코드 작성.
//     } else {
//       // 실패 시 동작 (예: 에러 메시지 표시)
//       console.log('로그인/가입 실패');
//       console.log(response);
//       alert('로그인에 실패하였습니다! : ' + response.data.message);
//     }
//   } catch (error) {
//     console.error(error);
//     // 네트워크 에러 또는 서버 에러 처리
//   }
// };

// import axios from 'axios';

// export const loginApi = async (inputs, types) => {
//   try {
//     const response = await axios.post(
//       'https://daishi7462.cafe24.com/php/loginProcess.php',
//       {
//         name: inputs.name,
//         email: inputs.id,
//         password: inputs.pw,
//         type: types,
//       },
//     );

//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error; // 에러를 호출한 곳으로 전파
//   }
// };

import axios from 'axios';

export const loginApi = async (inputs, types) => {
  try {
    const response = await axios.post(
      'https://daishi7462.cafe24.com/php/sign_in.php',
      {
        name: inputs.name,
        email: inputs.id,
        password: inputs.pw,
        type: types,
      },
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // 에러를 호출한 곳으로 전파
  }
};
