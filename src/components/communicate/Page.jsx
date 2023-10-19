import React from 'react';
import styled from 'styled-components';
import searchImg from '../../assets/img/icon_search.svg';
import Button from '../common/Button';

const S = {
  SearchBox: styled.div`
    display: block;
    width: 200px;
    height: 40px;
    border: solid 1px #dadada;
    border-radius: 10px;
    padding: 5px;
    box-sizing: border-box;
    background: #fff;
    position: relative;
    margin-left: 180px;
    margin-bottom: 10px;
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
  `,
  Tr: styled.tr`
    height: 30px;
  `,
  Th: styled.th`
    width: 70px;
    border-top: 1px solid #e2e2e5;
    background-color: white;
    color: #143c56;
    font-weight: 700;
    vertical-align: middle !important;
  `,
  Td: styled.td`
    border-top: 1px solid #e2e2e5;
    vertical-align: middle !important;
    &.num {
      text-align: center;
    }
    &.name {
      width: 70px;
      text-align: center;
    }
    &.Read {
      cursor: pointer;
      padding-left: 5px;
    }
  `,
  body: styled.tbody`
    /* border: 1px solid blue; */
  `,
  foot: styled.tfoot`
    /* border: 1px solid blue; */
  `,
  PN: styled.div`
    width: 300px;
    height: 50px;
    margin: 0 auto;
    border: 1px solid green;
    margin: 10px auto;
  `,
  ButtonBox: styled.div`
    width: auto;
    height: auto;
    position: relative;
    text-align: right;
    margin-right: 10px;
  `,
  Box: styled.div`
    position: relative;
    width: auto;
    height: 310px;
  `,
  Search: styled.input`
    position: relative;
    width: 160px;
    height: 29px;
    border: none;
    background: #fff;
    font-size: 12px;
  `,

  SearchIcon: styled.img`
    width: 18px;
    height: 20px;
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 8px;
    margin-top: -10px;
    cursor: pointer;
  `,
};

const Page = () => {
  return (
    <>
      <S.SearchBox>
        <S.Search
          type="text"
          maxlength="20"
          placeholder="검색할 제목을 입력하세요"
        />
        <S.SearchIcon src={searchImg} />
      </S.SearchBox>
      <S.Box>
        <S.Table>
          <S.body>
            <S.Tr>
              <S.Th className="num">1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th className="num">1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th className="num">1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th className="num">1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th className="num">1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th className="num">1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th className="num">1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th className="num">1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th className="num">1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
            <S.Tr>
              <S.Th className="num">1</S.Th>
              <S.Td className="Read">1</S.Td>
              <S.Td className="name">1</S.Td>
            </S.Tr>
          </S.body>
        </S.Table>
      </S.Box>
      <S.ButtonBox>
        <Button text={'글 쓰 기'} />
      </S.ButtonBox>
      <S.PN></S.PN>
    </>
  );
};

export default Page;
