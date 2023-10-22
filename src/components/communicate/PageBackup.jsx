import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import searchImg from '../../assets/img/icon_search.svg';
import Button from '../common/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { CommuListApi } from '../../lib/apis/CommuListApi';

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
  Pagination: styled.div`
    height: 30px;
    display: flex;
    justify-content: center;
    margin-top: 10px;
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

const Page = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get('page')) || 1;

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const pageSize = 10;

  useEffect(() => {
    setCurrentPage(page);
    GetCommuList();
  }, [page]);

  const GetCommuList = async () => {
    try {
      const response = await CommuListApi();
      const sortedData = response.sort((a, b) => b.idx - a.idx);
      setData(sortedData);
      setFilteredData(sortedData);
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(filtered);
    setCurrentPage(1);
    navigate(`/commu?page=1`);
  };

  const handleTableRowClick = (itemIdx) => {
    navigate('/commu/read', { state: { itemIdx } });
  };

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    navigate(`/commu?page=${newPage}`);
  };

  return (
    <>
      <S.SearchBox>
        <input
          type="text"
          maxLength="20"
          placeholder="검색할 제목을 입력하세요"
          value={searchText}
          onChange={handleSearch}
        />
        <img src={searchImg} alt="Search" />
      </S.SearchBox>
      <S.Table>
        <S.body>
          {currentItems.map((item, index) => (
            <S.Tr key={index}>
              <S.Th className="num">{item.idx}</S.Th>
              <S.Td
                className="Read"
                onClick={() => handleTableRowClick(item.idx)}
              >
                {item.title}
              </S.Td>
              <S.Td className="name">{item.name}</S.Td>
            </S.Tr>
          ))}
        </S.body>
      </S.Table>
      <S.Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <S.PageButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </S.PageButton>
        ))}
      </S.Pagination>
    </>
  );
};

export default Page;

//현재

// import React from 'react';
// import styled from 'styled-components';
// import searchImg from '../../assets/img/icon_search.svg';
// import Button from '../common/Button';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { CommuListApi } from '../../lib/apis/CommuListApi';
// import { useEffect } from 'react';
// const S = {
//   SearchBox: styled.div`
//     display: block;
//     width: 200px;
//     height: 40px;
//     border: solid 1px #dadada;
//     border-radius: 10px;
//     padding: 5px;
//     box-sizing: border-box;
//     background: #fff;
//     position: relative;
//     margin-left: 180px;
//     margin-bottom: 10px;
//   `,
//   Table: styled.table`
//     width: 370px;
//     margin: 0 auto;
//     border-bottom: 1px solid #5c5c5c;
//     border-top: 2px solid #2e2e2e;
//     font-size: 12px;
//     margin-bottom: 10px;
//   `,
//   Head: styled.thead`
//     /* border: 1px solid blue; */
//   `,
//   Tr: styled.tr`
//     height: 30px;
//   `,
//   Th: styled.th`
//     width: 70px;
//     border-top: 1px solid #e2e2e5;
//     background-color: white;
//     color: #143c56;
//     font-weight: 700;
//     vertical-align: middle !important;
//   `,
//   Td: styled.td`
//     border-top: 1px solid #e2e2e5;
//     vertical-align: middle !important;
//     &.num {
//       text-align: center;
//     }
//     &.name {
//       width: 70px;
//       text-align: center;
//     }
//     &.Read {
//       cursor: pointer;
//       padding-left: 5px;
//     }
//   `,
//   body: styled.tbody`
//     /* border: 1px solid blue; */
//   `,
//   foot: styled.tfoot`
//     /* border: 1px solid blue; */
//   `,
//   PN: styled.div`
//     width: 300px;
//     height: 50px;
//     margin: 0 auto;
//     border: 1px solid green;
//     margin: 10px auto;
//   `,
//   ButtonBox: styled.div`
//     width: auto;
//     height: auto;
//     position: relative;
//     text-align: right;
//     margin-right: 10px;
//   `,
//   Box: styled.div`
//     position: relative;
//     width: auto;
//     height: 310px;
//   `,
//   Search: styled.input`
//     position: relative;
//     width: 160px;
//     height: 29px;
//     border: none;
//     background: #fff;
//     font-size: 12px;
//   `,

//   SearchIcon: styled.img`
//     width: 18px;
//     height: 20px;
//     display: inline-block;
//     position: absolute;
//     top: 50%;
//     right: 8px;
//     margin-top: -10px;
//     cursor: pointer;
//   `,
//   Pagination: styled.div`
//     height: 30px;
//     display: flex;
//     justify-content: center;
//     margin-top: 10px;
//     margin-bottom: 20px;
//   `,
//   PageButton: styled.button`
//     margin: 0 5px;
//     cursor: pointer;
//     &.active {
//       color: red;
//     }
//   `,
// };

// const Page = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const page = parseInt(queryParams.get('page')) || 1;

//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(page);
//   const [searchText, setSearchText] = useState(''); // 검색어 상태
//   const [filteredData, setFilteredData] = useState([]); // 검색 결과를 저장할 상태
//   const pageSize = 10;

//   const indexOfLastItem = currentPage * pageSize;
//   const indexOfFirstItem = indexOfLastItem - pageSize;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   const totalPages = Math.ceil(filteredData.length / pageSize);
//   console.log(totalPages);

//   const GetCommuList = async () => {
//     try {
//       const response = await CommuListApi();
//       const sortedData = response.sort((a, b) => b.idx - a.idx);
//       setData(sortedData);

//       const filtered = sortedData.filter((item) =>
//         item.title.toLowerCase().includes(searchText.toLowerCase()),
//       );

//       setFilteredData(filtered);
//     } catch (error) {
//       console.error('데이터 가져오기 실패:', error);
//     }
//   };

//   useEffect(() => {
//     console.log(totalPages);
//     GetCommuList(); // 컴포넌트가 마운트될 때 데이터를 가져옵니다.
//   }, []);

//   // useEffect(() => {
//   //   const totalPages = Math.ceil(filteredData.length / pageSize);
//   //   if (currentPage > totalPages) {
//   //     // 페이지 번호가 범위를 벗어난 경우 /main으로 이동
//   //     navigate('/main');
//   //     return;
//   //   }
//   //   GetCommuList();
//   // }, [currentPage, searchText]);

//   // useEffect(() => {
//   //   if (currentPage > totalPages) {
//   //     navigate('/main');
//   //     return;
//   //   }
//   //   GetCommuList();
//   // }, [currentPage, searchText]);

//   useEffect(() => {
//     setCurrentPage(page);
//     GetCommuList();
//   }, [page]);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//     navigate(`/commu?page=${newPage}`);
//   };

//   const handleSearch = (e) => {
//     const text = e.target.value;
//     setSearchText(text);
//     const filtered = data.filter((item) =>
//       item.title.toLowerCase().includes(text.toLowerCase()),
//     );
//     setFilteredData(filtered);
//     setCurrentPage(1);
//     navigate(`/commu?page=1`);
//   };
//   console.log(searchText); //searchText가 공백이면 전역변수로 설정해뒀던 페이지를 다시 설정함

//   const handleTableRowClick = (itemIdx) => {
//     navigate('/commu/read', { state: { itemIdx } });
//   };

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <>
//       <S.SearchBox>
//         <S.Search
//           type="text"
//           maxlength="20"
//           placeholder="검색할 제목을 입력하세요"
//           value={searchText}
//           onChange={handleSearch}
//         />
//         <S.SearchIcon src={searchImg} />
//       </S.SearchBox>
//       <S.Box>
//         <S.Table>
//           <S.body>
//             {currentItems.map((item, index) => (
//               <S.Tr key={index}>
//                 <S.Th className="num">{item.idx}</S.Th>
//                 <S.Td
//                   className="Read"
//                   onClick={() => handleTableRowClick(item.idx)}
//                 >
//                   {item.title}
//                 </S.Td>
//                 <S.Td className="name">{item.name}</S.Td>
//               </S.Tr>
//             ))}
//           </S.body>
//         </S.Table>
//       </S.Box>
//       <S.ButtonBox>
//         <Button
//           text={'글 쓰 기'}
//           onClick={() => {
//             navigate('/commu/write');
//           }}
//         />
//       </S.ButtonBox>
//       {/* <S.PN></S.PN> */}
//       <S.Pagination>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <S.PageButton
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             // onClick={() => paginate(index + 1)}
//             className={index + 1 === currentPage ? 'active' : ''}
//           >
//             {index + 1}
//           </S.PageButton>
//         ))}
//       </S.Pagination>
//     </>
//   );
// };

// export default Page;

//너무 복잡해서 포기
// import React from 'react';
// import styled from 'styled-components';
// import searchImg from '../../assets/img/icon_search.svg';
// import Button from '../common/Button';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { CommuListApi } from '../../lib/apis/CommuListApi';
// import { useEffect } from 'react';
// const S = {
//   SearchBox: styled.div`
//     display: block;
//     width: 200px;
//     height: 40px;
//     border: solid 1px #dadada;
//     border-radius: 10px;
//     padding: 5px;
//     box-sizing: border-box;
//     background: #fff;
//     position: relative;
//     margin-left: 180px;
//     margin-bottom: 10px;
//   `,
//   Table: styled.table`
//     width: 370px;
//     margin: 0 auto;
//     border-bottom: 1px solid #5c5c5c;
//     border-top: 2px solid #2e2e2e;
//     font-size: 12px;
//     margin-bottom: 10px;
//   `,
//   Head: styled.thead`
//     /* border: 1px solid blue; */
//   `,
//   Tr: styled.tr`
//     height: 30px;
//   `,
//   Th: styled.th`
//     width: 70px;
//     border-top: 1px solid #e2e2e5;
//     background-color: white;
//     color: #143c56;
//     font-weight: 700;
//     vertical-align: middle !important;
//   `,
//   Td: styled.td`
//     border-top: 1px solid #e2e2e5;
//     vertical-align: middle !important;
//     &.num {
//       text-align: center;
//     }
//     &.name {
//       width: 70px;
//       text-align: center;
//     }
//     &.Read {
//       cursor: pointer;
//       padding-left: 5px;
//     }
//   `,
//   body: styled.tbody`
//     /* border: 1px solid blue; */
//   `,
//   foot: styled.tfoot`
//     /* border: 1px solid blue; */
//   `,
//   PN: styled.div`
//     width: 300px;
//     height: 50px;
//     margin: 0 auto;
//     border: 1px solid green;
//     margin: 10px auto;
//   `,
//   ButtonBox: styled.div`
//     width: auto;
//     height: auto;
//     position: relative;
//     text-align: right;
//     margin-right: 10px;
//   `,
//   Box: styled.div`
//     position: relative;
//     width: auto;
//     height: 310px;
//   `,
//   Search: styled.input`
//     position: relative;
//     width: 160px;
//     height: 29px;
//     border: none;
//     background: #fff;
//     font-size: 12px;
//   `,

//   SearchIcon: styled.img`
//     width: 18px;
//     height: 20px;
//     display: inline-block;
//     position: absolute;
//     top: 50%;
//     right: 8px;
//     margin-top: -10px;
//     cursor: pointer;
//   `,
//   Pagination: styled.div`
//     height: 30px;
//     display: flex;
//     justify-content: center;
//     margin-top: 10px;
//     margin-bottom: 20px;
//   `,
//   PageButton: styled.button`
//     margin: 0 5px;
//     cursor: pointer;
//     &.active {
//       color: red;
//     }
//   `,
// };

// const Page = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const page = parseInt(queryParams.get('page')) || 1;

//   const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(page);
//   const [searchText, setSearchText] = useState(''); // 검색어 상태
//   const [filteredData, setFilteredData] = useState([]); // 검색 결과를 저장할 상태
//   const pageSize = 10;
//   const [totalPages, setTotalPages] = useState(1); // totalPages 상태 추가

//   const indexOfLastItem = currentPage * pageSize;
//   const indexOfFirstItem = indexOfLastItem - pageSize;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   // const totalPages = Math.ceil(filteredData.length / pageSize);
//   console.log(totalPages);

//   const GetCommuList = async () => {
//     try {
//       const response = await CommuListApi();
//       const sortedData = response.sort((a, b) => b.idx - a.idx);
//       setData(sortedData);

//       const filtered = sortedData.filter((item) =>
//         item.title.toLowerCase().includes(searchText.toLowerCase()),
//       );

//       setFilteredData(filtered);
//       setTotalPages(Math.ceil(filtered.length / pageSize));
//     } catch (error) {
//       console.error('데이터 가져오기 실패:', error);
//     }
//   };

//   useEffect(() => {
//     console.log(totalPages);
//     GetCommuList(); // 컴포넌트가 마운트될 때 데이터를 가져옵니다.
//   }, []);

//   // useEffect(() => {
//   //   const totalPages = Math.ceil(filteredData.length / pageSize);
//   //   if (currentPage > totalPages) {
//   //     // 페이지 번호가 범위를 벗어난 경우 /main으로 이동
//   //     navigate('/main');
//   //     return;
//   //   }
//   //   GetCommuList();
//   // }, [currentPage, searchText]);
//   useEffect(() => {
//     if (currentPage > totalPages) {
//       navigate('/main');
//       return;
//     }
//     GetCommuList();
//   }, [currentPage, searchText]);

//   useEffect(() => {
//     setCurrentPage(page);
//     GetCommuList();
//   }, [page]);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//     navigate(`/commu?page=${newPage}`);
//   };

//   const handleSearch = (e) => {
//     const text = e.target.value;
//     setSearchText(text);
//     const filtered = data.filter((item) =>
//       item.title.toLowerCase().includes(text.toLowerCase()),
//     );
//     setFilteredData(filtered);
//     setCurrentPage(1);
//     navigate(`/commu?page=1`);
//   };
//   console.log(searchText); //searchText가 공백이면 전역변수로 설정해뒀던 페이지를 다시 설정함

//   const handleTableRowClick = (itemIdx) => {
//     navigate('/commu/read', { state: { itemIdx } });
//   };

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <>
//       <S.SearchBox>
//         <S.Search
//           type="text"
//           maxlength="20"
//           placeholder="검색할 제목을 입력하세요"
//           value={searchText}
//           onChange={handleSearch}
//         />
//         <S.SearchIcon src={searchImg} />
//       </S.SearchBox>
//       <S.Box>
//         <S.Table>
//           <S.body>
//             {currentItems.map((item, index) => (
//               <S.Tr key={index}>
//                 <S.Th className="num">{item.idx}</S.Th>
//                 <S.Td
//                   className="Read"
//                   onClick={() => handleTableRowClick(item.idx)}
//                 >
//                   {item.title}
//                 </S.Td>
//                 <S.Td className="name">{item.name}</S.Td>
//               </S.Tr>
//             ))}
//           </S.body>
//         </S.Table>
//       </S.Box>
//       <S.ButtonBox>
//         <Button
//           text={'글 쓰 기'}
//           onClick={() => {
//             navigate('/commu/write');
//           }}
//         />
//       </S.ButtonBox>
//       {/* <S.PN></S.PN> */}
//       <S.Pagination>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <S.PageButton
//             key={index}
//             onClick={() => handlePageChange(index + 1)}
//             // onClick={() => paginate(index + 1)}
//             className={index + 1 === currentPage ? 'active' : ''}
//           >
//             {index + 1}
//           </S.PageButton>
//         ))}
//       </S.Pagination>
//     </>
//   );
// };

// export default Page;
