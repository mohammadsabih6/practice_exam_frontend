import React from 'react';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
const Hotel = ({ item }) => {
  return (
    <>
      <div>
    <Card style={{width:"30%",height:"20%",marginLeft:'35%', boxShadow: '10px 8px 6px 10px rgba(0, 0, 0, 0.1)',margin:"30px",borderRadius:"30px"}}>
        {/* <h1>Hotel</h1> */}
      <img style={{width:'100%',height:'30%'}}src={item.imgLink} alt='Hotel Image'/>
      <p><strong>{item.name}</strong></p>
      <p>{item.shortDesc}</p>
      <p>{item.experience}</p>
      <p>Rs: {item.price}</p>
      <Link to={`/hotelDetails/${item.id}`}>
          <button style={{ padding: '15px', fontSize: '1rem', borderRadius: '10px', marginBottom: '15px' }}>Bookings</button>
        </Link>
    </Card>
    </div>
    </>
  );
};

export default Hotel;
