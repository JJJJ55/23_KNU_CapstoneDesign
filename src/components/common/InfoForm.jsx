// // import styled from 'styled-components';
// // import ButtonLong from '../common/ButtonLong';
// // import { useState, useEffect } from 'react';
// // const S = {
// //   Header: styled.h1`
// //     font-weight: bold;
// //     font-size: 24px;
// //     color: #000;
// //     margin-bottom: 60px;
// //   `,
// //   Info: styled.div`
// //     margin-bottom: 20px;
// //   `,
// //   Name: styled.div`
// //     margin-bottom: 20px;
// //   `,
// //   Input: styled.input`
// //     width: 322px;
// //     height: 40px;
// //     font-size: 15px;
// //     color: #000;
// //     border-bottom: 1px solid black;
// //     ::placeholder {
// //       font-weight: bold;
// //     }
// //   `,
// //   Label: styled.label`
// //     display: block;
// //     margin-bottom: 10px;
// //     font-weight: 600;
// //   `,
// // };

// // const InfoForm = ({ type }) => {
// //   const title = {
// //     login: '로 그 인',
// //     register: '회 원 가 입',
// //   };
// //   const headline = title[type];

// //   const [btnOn, setBtnOn] = useState(false);
// //   const [data, setData] = useState({
// //     name: '',
// //     id: '',
// //     pw: '',
// //   });

// //   useEffect(() => {
// //     btnOnOff();
// //   }, [data]);

// //   const InputChange = (e) => {
// //     setData({
// //       ...data,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const btnOnOff = () => {
// //     if (type === 'register') {
// //       if (!!data.name && !!data.id && data.pw.length > 5) {
// //         setBtnOn(true);
// //       } else {
// //         setBtnOn(false);
// //       }
// //     } else {
// //       if (!!data.id && data.pw.length > 5) {
// //         setBtnOn(true);
// //       } else {
// //         setBtnOn(false);
// //       }
// //     }
// //   };

// //   const btnSubmit = (e) => {
// //     e.preventDefault();
// //     if (btnOn) {
// //       onsubmit(data);
// //     }
// //   };

// //   return (
// //     <>
// //       <S.Header>{headline}</S.Header>
// //       <form>
// //         {type === 'register' && (
// //           <S.Name>
// //             <S.Label htmlFor="name">성함</S.Label>
// //             <S.Input
// //               name="name"
// //               value={data.name}
// //               placeholder="성함을 입력하세요"
// //               type="text"
// //               onChange={InputChange}
// //             />
// //           </S.Name>
// //         )}
// //         <S.Info>
// //           <S.Label htmlFor="id">이메일</S.Label>
// //           <S.Input
// //             name="id"
// //             value={data.id}
// //             placeholder="이메일을 입력하세요"
// //             type="text"
// //             onChange={InputChange}
// //           />
// //         </S.Info>
// //         <S.Info>
// //           <S.Label htmlFor="pw">비밀번호</S.Label>
// //           <S.Input
// //             name="pw"
// //             type="password"
// //             value={data.pw}
// //             placeholder="8~15자리 비밀번호를 입력하세요"
// //             maxLength={15}
// //             onChange={InputChange}
// //           />
// //         </S.Info>
// //         <ButtonLong
// //           text={type === 'register' ? '가입하기' : '로그인'}
// //           onClick={btnSubmit}
// //           active={btnOn}
// //         />
// //       </form>
// //     </>
// //   );
// // };

// // export default InfoForm;

// import styled from 'styled-components';
// import ButtonLong from '../common/ButtonLong';
// import { useState, useEffect } from 'react';
// // import A from '../common/A';
// import axios from 'axios';
// // import { useCookies } from 'react-cookie';

// const S = {
//   Header: styled.h1`
//     font-weight: bold;
//     font-size: 24px;
//     color: #000;
//     margin-bottom: 60px;
//   `,
//   Info: styled.div`
//     margin-bottom: 20px;
//   `,
//   Name: styled.div`
//     margin-bottom: 20px;
//   `,
//   Input: styled.input`
//     width: 322px;
//     height: 40px;
//     font-size: 15px;
//     color: #000;
//     border-bottom: 1px solid black;
//     ::placeholder {
//       font-weight: bold;
//     }
//   `,
//   Label: styled.label`
//     display: block;
//     margin-bottom: 10px;
//     font-weight: 600;
//   `,
// };

// const InfoForm = ({ type }) => {
//   const title = {
//     login: '로 그 인',
//     register: '회 원 가 입',
//   };
//   const headline = title[type];

//   const [btnOn, setBtnOn] = useState(false);
//   const [data, setData] = useState({
//     name: '',
//     id: '',
//     pw: '',
//   });

//   useEffect(() => {
//     btnOnOff();
//   }, [data]);

//   const InputChange = (e) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const btnOnOff = () => {
//     if (type === 'register') {
//       if (!!data.name && !!data.id && data.pw.length > 5) {
//         setBtnOn(true);
//       } else {
//         setBtnOn(false);
//       }
//     } else {
//       if (!!data.id && data.pw.length > 5) {
//         setBtnOn(true);
//       } else {
//         setBtnOn(false);
//       }
//     }
//   };

//   const btnSubmit = async (e) => {
//     e.preventDefault();
//     if (btnOn) {
//       try {
//         // Axios를 사용하여 PHP 스크립트에 데이터를 전송
//         const response = await axios.post(
//           'https://daishi7462.cafe24.com/php/loginProcess.php',
//           {
//             name: data.name,
//             email: data.id,
//             password: data.pw,
//             type: type,
//           },
//         );

//         // 서버에서의 응답 처리
//         if (response.data.success) {
//           // 성공적으로 처리되었을 때의 동작 (예: 페이지 이동 또는 메시지 표시)
//           console.log('로그인/가입 성공');
//           //세션값 받아오는 코드 작성.
//         } else {
//           // 실패 시 동작 (예: 에러 메시지 표시)
//           console.log('로그인/가입 실패');
//           console.log(response);
//           alert('로그인에 실패하였습니다! : ' + response.data.message);
//         }
//       } catch (error) {
//         console.error(error);
//         // 네트워크 에러 또는 서버 에러 처리
//       }
//     }
//   };

//   return (
//     <>
//       <S.Header>{headline}</S.Header>
//       {type === 'register' && (
//         <S.Name>
//           <S.Label htmlFor="name">성함</S.Label>
//           <S.Input
//             name="name"
//             value={data.name}
//             placeholder="성함을 입력하세요"
//             type="text"
//             onChange={InputChange}
//           />
//         </S.Name>
//       )}
//       <S.Info>
//         <S.Label htmlFor="id">이메일</S.Label>
//         <S.Input
//           name="id"
//           value={data.id}
//           placeholder="이메일을 입력하세요"
//           type="text"
//           onChange={InputChange}
//         />
//       </S.Info>
//       <S.Info>
//         <S.Label htmlFor="pw">비밀번호</S.Label>
//         <S.Input
//           name="pw"
//           type="password"
//           value={data.pw}
//           placeholder="8~15자리 비밀번호를 입력하세요"
//           maxLength={15}
//           onChange={InputChange}
//         />
//       </S.Info>
//       <ButtonLong
//         text={type === 'register' ? '가입하기' : '로그인'}
//         onClick={btnSubmit}
//         active={btnOn}
//       />
//     </>
//   );
// };

// export default InfoForm;

// import styled from 'styled-components';
// import ButtonLong from '../common/ButtonLong';
// import { useState, useEffect } from 'react';
// const S = {
//   Header: styled.h1`
//     font-weight: bold;
//     font-size: 24px;
//     color: #000;
//     margin-bottom: 60px;
//   `,
//   Info: styled.div`
//     margin-bottom: 20px;
//   `,
//   Name: styled.div`
//     margin-bottom: 20px;
//   `,
//   Input: styled.input`
//     width: 322px;
//     height: 40px;
//     font-size: 15px;
//     color: #000;
//     border-bottom: 1px solid black;
//     ::placeholder {
//       font-weight: bold;
//     }
//   `,
//   Label: styled.label`
//     display: block;
//     margin-bottom: 10px;
//     font-weight: 600;
//   `,
// };

// const InfoForm = ({ type }) => {
//   const title = {
//     login: '로 그 인',
//     register: '회 원 가 입',
//   };
//   const headline = title[type];

//   const [btnOn, setBtnOn] = useState(false);
//   const [data, setData] = useState({
//     name: '',
//     id: '',
//     pw: '',
//   });

//   useEffect(() => {
//     btnOnOff();
//   }, [data]);

//   const InputChange = (e) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const btnOnOff = () => {
//     if (type === 'register') {
//       if (!!data.name && !!data.id && data.pw.length > 5) {
//         setBtnOn(true);
//       } else {
//         setBtnOn(false);
//       }
//     } else {
//       if (!!data.id && data.pw.length > 5) {
//         setBtnOn(true);
//       } else {
//         setBtnOn(false);
//       }
//     }
//   };

//   const btnSubmit = (e) => {
//     e.preventDefault();
//     if (btnOn) {
//       onsubmit(data);
//     }
//   };

//   return (
//     <>
//       <S.Header>{headline}</S.Header>
//       <form>
//         {type === 'register' && (
//           <S.Name>
//             <S.Label htmlFor="name">성함</S.Label>
//             <S.Input
//               name="name"
//               value={data.name}
//               placeholder="성함을 입력하세요"
//               type="text"
//               onChange={InputChange}
//             />
//           </S.Name>
//         )}
//         <S.Info>
//           <S.Label htmlFor="id">이메일</S.Label>
//           <S.Input
//             name="id"
//             value={data.id}
//             placeholder="이메일을 입력하세요"
//             type="text"
//             onChange={InputChange}
//           />
//         </S.Info>
//         <S.Info>
//           <S.Label htmlFor="pw">비밀번호</S.Label>
//           <S.Input
//             name="pw"
//             type="password"
//             value={data.pw}
//             placeholder="8~15자리 비밀번호를 입력하세요"
//             maxLength={15}
//             onChange={InputChange}
//           />
//         </S.Info>
//         <ButtonLong
//           text={type === 'register' ? '가입하기' : '로그인'}
//           onClick={btnSubmit}
//           active={btnOn}
//         />
//       </form>
//     </>
//   );
// };

// export default InfoForm;

import styled from 'styled-components';
import ButtonLong from '../common/ButtonLong';
import { useState, useEffect } from 'react';
// import A from '../common/A';
// import { useCookies } from 'react-cookie';

const S = {
  Header: styled.h1`
    font-weight: bold;
    font-size: 24px;
    color: #000;
    margin-bottom: 60px;
  `,
  Info: styled.div`
    margin-bottom: 20px;
  `,
  Name: styled.div`
    margin-bottom: 20px;
  `,
  Input: styled.input`
    width: 322px;
    height: 40px;
    font-size: 15px;
    color: #000;
    border-bottom: 1px solid black;
    ::placeholder {
      font-weight: bold;
    }
  `,
  Label: styled.label`
    display: block;
    margin-bottom: 10px;
    font-weight: 600;
  `,
};

const InfoForm = ({ type, onSubmit }) => {
  const title = {
    login: '로 그 인',
    register: '회 원 가 입',
  };
  const headline = title[type];

  const [btnOn, setBtnOn] = useState(false);
  const [data, setData] = useState({
    name: '',
    id: '',
    pw: '',
  });

  useEffect(() => {
    btnOnOff();
  }, [data]);

  const InputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const btnOnOff = () => {
    if (type === 'register') {
      if (!!data.name && !!data.id && data.pw.length > 5) {
        setBtnOn(true);
      } else {
        setBtnOn(false);
      }
    } else {
      if (!!data.id && data.pw.length > 5) {
        setBtnOn(true);
      } else {
        setBtnOn(false);
      }
    }
  };
  const btnSubmit = async (e) => {
    e.preventDefault();
    if (btnOn) {
      // {
      //   if (type === 'register') {
      //     console.log('회원가입경로');
      //   } else {
      //     LoginApi(data, type);
      //   }
      // }
      onSubmit(data, type);
    }
  };

  return (
    <>
      <S.Header>{headline}</S.Header>
      {type === 'register' && (
        <S.Name>
          <S.Label htmlFor="name">성함</S.Label>
          <S.Input
            name="name"
            value={data.name}
            placeholder="성함을 입력하세요"
            type="text"
            onChange={InputChange}
          />
        </S.Name>
      )}
      <S.Info>
        <S.Label htmlFor="id">이메일</S.Label>
        <S.Input
          name="id"
          value={data.id}
          placeholder="이메일을 입력하세요"
          type="text"
          onChange={InputChange}
        />
      </S.Info>
      <S.Info>
        <S.Label htmlFor="pw">비밀번호</S.Label>
        <S.Input
          name="pw"
          type="password"
          value={data.pw}
          placeholder="8~15자리 비밀번호를 입력하세요"
          maxLength={15}
          onChange={InputChange}
        />
      </S.Info>
      <ButtonLong
        text={type === 'register' ? '가입하기' : '로그인'}
        onClick={btnSubmit}
        active={btnOn}
      />
    </>
  );
};

export default InfoForm;
