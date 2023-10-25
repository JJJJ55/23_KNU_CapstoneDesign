import React from 'react';
import styled from 'styled-components';
import { CarmapListApi } from '../../lib/apis/CarmapListApi';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/img/404.png';
import { useRef } from 'react';
import { RepairShop } from '../CarDamage/RepairShop';

const { kakao } = window;

const S = {
  Box: styled.div`
    width: 350px;
    height: 350px;
    border: 2px solid #2e2e2e;
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
      font-size: 10px;
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
  error: styled.img`
    width: 300px;
    height: 300px;
    position: absolute;
    margin: 0 auto;
    right: 0;
    left: 0;
  `,
};

const MapBox = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get('page')) || 1;

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(page);
  const pageSize = 10;
  const totalItems = data.length;

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  const handlePageChange = (newPage) => {
    navigate(`/map?page=${newPage}`);
    setCurrentPage(newPage);
  };

  useEffect(() => {
    getList();
  }, [currentPage]);

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
  const mapRef = useRef(null);

  useEffect(() => {
    const container = mapRef.current;

    const options = {
      center: new window.kakao.maps.LatLng(latitude, longitude),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    RepairShop.forEach((el) => {
      // 마커를 생성합니다
      new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        //마커에 hover시 나타날 title
        title: el.title,
      });
    });
  }, [latitude, longitude]);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        function (error) {
          setError(error.message);
        },
      );
    } else {
      setError('Geolocation is not available in your browser.');
    }
  }, []);

  const ChangeMap = (CenterName) => {
    // 이 부분에서 CenterName을 직접 추출
    const title = CenterName; // CenterName은 이벤트 객체가 아니라 클릭된 row의 title일 것으로 가정

    const selectedShop = RepairShop.find((shop) => shop.title === title);
    console.log(selectedShop.lat, selectedShop.lng);
    if (selectedShop && selectedShop.lat && selectedShop.lng) {
      // 선택된 상점이 있고, lat 및 lng 값이 있을 때만 지도의 중심을 이동
      // const map = new window.kakao.maps.Map(document.getElementById('map'));
      // map.setCenter(
      //   new window.kakao.maps.LatLng(selectedShop.lat, selectedShop.lng),
      // );

      const container = mapRef.current;

      const options = {
        center: new window.kakao.maps.LatLng(
          selectedShop.lat,
          selectedShop.lng,
        ),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);

      // 지도 중심을 이동 시킵니다
      // mapRef.current.setCenter(moveLatLon);
      var moveLatLon = new kakao.maps.LatLng(
        selectedShop.lat,
        selectedShop.lng,
      );
      map.setCenter(moveLatLon);
      // 여기에 마커 생성 및 설정하는 코드를 추가할 수 있습니다
    }
  };

  return (
    <>
      {console.log(latitude, longitude)}
      <S.Box id="map" ref={mapRef}></S.Box>
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
            {/* {currentItems.map((item, index) => {
              const name = item.name; // item.name을 const 변수 name에 할당
              const repairName = name.replace(/ /, '\n'); // 모든 공백을 \n으로 대체

              return (
                <S.Tr className="list" key={index}>
                  <S.Td className="name">{repairName}</S.Td>
                  <S.Td className="Read">{item.address}</S.Td>
                  <S.Td className="number">{item.tell}</S.Td>
                </S.Tr>
              );
            })} */}
            {currentItems.length === 0 ? (
              <S.error src={img} />
            ) : (
              currentItems.map((item, index) => {
                const name = item.name; // item.name을 const 변수 name에 할당
                const repairName = name.replace(/ /, '\n'); // 모든 공백을 \n으로 대체

                return (
                  <S.Tr
                    className="list"
                    key={index}
                    onClick={() => ChangeMap(item.name)}
                  >
                    <S.Td className="name">{repairName}</S.Td>
                    <S.Td className="Read">{item.address}</S.Td>
                    <S.Td className="number">{item.tell}</S.Td>
                  </S.Tr>
                );
              })
            )}
          </S.body>
        </S.Table>
      </S.TableBox>
      <S.Pagination>
        {Array.from(
          { length: Math.ceil(totalItems / pageSize) },
          (_, index) => (
            // <S.PageButton
            //   className={currentPage === index + 1 ? 'active' : ''}
            //   key={index}
            //   // onClick={() => paginate(index + 1)}
            //   onClick={handlePageChange(index + 1)}
            // >
            //   {index + 1}
            // </S.PageButton>
            <S.PageButton
              className={currentPage === index + 1 ? 'active' : ''}
              key={index}
              // onClick={() => paginate(index + 1)}
              onClick={() => handlePageChange(index + 1)}
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
