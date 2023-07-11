import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8081/hotel/get/${id}`)
      .then((response) => response.json())
      .then((data) => setHotel(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (hotel === null) {
    return <div>Loading...</div>; // Display a loading state while fetching the data
  }

  return (
    <div>
        <Card style={{width:"50%",height:"20%",marginLeft:'25%', boxShadow: '10px 8px 6px 10px rgba(0, 0, 0, 0.1)',margin:"30px",borderRadius:"30px"}}>
        {/* <h1>Hotel</h1> */}
      <img style={{width:'100%',height:'30%'}}src={hotel.imgLink} alt='Hotel Image'/>
      <p><strong>{hotel.name}</strong></p>
      <p>{hotel.shortDesc}</p>
      <p>{hotel.longDesc}</p>
      <p>{hotel.location}</p>
      {/* <p>{hotel.pool}</p> */}
      <p>{hotel.experience}</p>
      <p>Rs: {hotel.price}</p>
      <Link to={'/confirmation'}>
          <button style={{ padding: '15px', fontSize: '1rem', borderRadius: '10px', marginBottom: '15px' }}>Book My Stay</button>
        </Link>
    </Card>
    </div>
  );
};

export default HotelDetails;
