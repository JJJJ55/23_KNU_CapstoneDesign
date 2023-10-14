import React from 'react';
import styled from 'styled-components';

const S = {
  Box: styled.div`
    width: 350px;
    height: 500px;
    border: 1px solid red;
    margin: 0 auto;
  `,
  Table: styled.table`
    width: 370px;
    margin: 0 auto;
    border-bottom: 1px solid #5c5c5c;
    border-top: 2px solid #2e2e2e;
    font-size: 12px;
    margin-bottom: 10px;
  `,
  Head: styled.thead`
    /* border: 1px solid blue; */
    text-align: center;
    background-color: #05194d;
    color: #fff;
  `,
  Tr: styled.tr`
    border: 1px solid blue;
    height: 30px;
  `,
  Th: styled.th`
    width: 70px;
    /* border: 1px solid blue; */
    background-color: white;
    color: #143c56;
    font-weight: 700;
    vertical-align: middle !important;
  `,
  Td: styled.td`
    border: 1px solid red;
    vertical-align: middle !important;
    &.name {
      width: 70px;
      text-align: center;
    }
    &.Read {
      cursor: pointer;
      width: 150px;
    }
  `,
  body: styled.tbody`
    /* border: 1px solid blue; */
  `,
  TableBox: styled.div`
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    width: auto;
    height: auto;
  `,
};

const MapBox = () => {
  return (
    <>
      <S.Box></S.Box>
      <S.TableBox>
        <S.Table>
          <S.Head>
            <S.Tr>
              <S.Td>업체명</S.Td>
              <S.Td>주소</S.Td>
              <S.Td>전화번호</S.Td>
            </S.Tr>
          </S.Head>
          <S.body>
            <S.Tr>
              <S.Th>1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th>1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th>1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th>1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th>1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th>1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th>1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th>1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th>1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th>1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
          </S.body>
        </S.Table>
      </S.TableBox>
    </>
  );
};

export default MapBox;
