import React from 'react';
import styled from 'styled-components';
import { CarmapListApi } from '../../lib/apis/CarmapListApi';
import { useState } from 'react';
import { useEffect } from 'react';

const S = {
  Box: styled.div`
    width: 350px;
    height: 500px;
    border: 1px solid red;
    margin: 0 auto;
  `,
  Table: styled.table`
    width: 385px;
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
    &.list {
      font-size: 5px;
    }
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
    border: 1px solid #e4dcd3;
    vertical-align: middle !important;
    &.name {
      width: 80px;
      text-align: center;
      white-space: pre-line;
      line-height: 15px;
    }
    &.Read {
      cursor: pointer;
      width: 170px;
    }
    &.number {
      text-align: center;
      width: 70px;
    }
  `,
  body: styled.tbody`
    /* border: 1px solid blue; */
  `,
  TableBox: styled.div`
    position: relative;
    margin-top: 20px;
    width: auto;
    height: 360px;
  `,
  Pagination: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  `,
  PageButton: styled.button`
    margin: 0 5px;
    cursor: pointer;
    &.active {
      color: red;
    }
  `,
};

const MapBox = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const totalItems = data.length;

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const response = await CarmapListApi();
      setData(response);
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };
  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            {/* {currentItems.map((item, index) => (
              <S.Tr className="list" key={index}>
                <S.Td className="name">{item.name}</S.Td>
                <S.Td className="Read">{item.address}</S.Td>
                <S.Td className="number">{item.tell}</S.Td>
              </S.Tr>
            ))} */}
            {currentItems.map((item, index) => {
              const name = item.name; // item.name을 const 변수 name에 할당
              const repairName = name.replace(/ /, '\n'); // 모든 공백을 \n으로 대체

              return (
                <S.Tr className="list" key={index}>
                  <S.Td className="name">{repairName}</S.Td>
                  <S.Td className="Read">{item.address}</S.Td>
                  <S.Td className="number">{item.tell}</S.Td>
                </S.Tr>
              );
            })}
          </S.body>
        </S.Table>
      </S.TableBox>
      <S.Pagination>
        {Array.from(
          { length: Math.ceil(totalItems / pageSize) },
          (_, index) => (
            <S.PageButton
              className={currentPage === index + 1 ? 'active' : ''}
              key={index}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </S.PageButton>
          ),
        )}
      </S.Pagination>
    </>
  );
};

export default MapBox;
