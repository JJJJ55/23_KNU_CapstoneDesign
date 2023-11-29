import styled from 'styled-components';
import ButtonLong from '../common/ButtonLong';
import { useState, useEffect } from 'react';

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
    PwChange: '비 밀 번 호 변 경',
    find: '비 밀 번 호 찾 기',
  };
  const headline = title[type];

  const [btnOn, setBtnOn] = useState(false);
  const [data, setData] = useState({
    name: '',
    id: '',
    pw: '',
    current_pw: '',
    new_pw: '',
    new_pw2: '',
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
    } else if (type === 'login') {
      if (!!data.id && data.pw.length > 5) {
        setBtnOn(true);
      } else {
        setBtnOn(false);
      }
    } else if (type === 'find') {
      if (!!data.name && !!data.id) {
        setBtnOn(true);
      } else {
        setBtnOn(false);
      }
    } else {
      if (
        !!data.current_pw &&
        data.new_pw.length > 5 &&
        data.new_pw === data.new_pw2
      ) {
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
      onSubmit(data);
    }
  };

  return (
    <>
      <S.Header>{headline}</S.Header>
      {['register', 'find'].includes(type) && (
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
      {['register', 'login', 'find'].includes(type) && (
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
      )}
      {['register', 'login'].includes(type) && (
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
      )}
      {type === 'PwChange' && (
        <S.Info>
          <S.Label htmlFor="current_pw">현재 비밀번호</S.Label>
          <S.Input
            name="current_pw"
            value={data.current_pw}
            placeholder="현재 비밀번호를 입력하세요."
            type="password"
            onChange={InputChange}
          />
        </S.Info>
      )}
      {type === 'PwChange' && (
        <S.Info>
          <S.Label htmlFor="new_pw">새 비밀번호</S.Label>
          <S.Input
            name="new_pw"
            value={data.new_pw}
            placeholder="새 비밀번호를 입력하세요."
            type="password"
            onChange={InputChange}
          />
        </S.Info>
      )}
      {type === 'PwChange' && (
        <S.Info>
          <S.Label htmlFor="new_pw2">새 비밀번호(확인)</S.Label>
          <S.Input
            name="new_pw2"
            value={data.new_pw2}
            placeholder="새 비밀번호를 다시 입력하세요."
            type="password"
            onChange={InputChange}
          />
        </S.Info>
      )}

      <ButtonLong
        text={
          type === 'register'
            ? '가입하기'
            : type === 'login'
            ? '로그인'
            : type === 'find'
            ? '임시 비밀번호 발송'
            : type === 'PwChange'
            ? '비밀번호 변경'
            : ''
        }
        onClick={btnSubmit}
        active={btnOn}
      />
    </>
  );
};

export default InfoForm;
