import styled from 'styled-components';

const S = {
  Button: styled.button`
    width: 85px;
    height: 32px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    background-color: #e2e2e2;
    cursor: pointer;
  `,
};

const Button = ({ text }) => {
  return (
    <>
      <S.Button>{text}</S.Button>
    </>
  );
};

export default Button;
