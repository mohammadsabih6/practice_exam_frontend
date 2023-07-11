import React, { useEffect, useState } from 'react';
import  Hotel  from './Hotel';

const HotelList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/hotel/get")
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  const data = list.length !== 0
    ? list.map((item) => {
        return <Hotel item={item} key={item.id} />;
      })
    : null;

  return <div><h1>Welcome to the Exostourista</h1>{data}</div>;
};

export default HotelList;
