import React from 'react'
import Card from 'react-bootstrap/Card';
import './Restcard.css';
import { Link } from 'react-router-dom';

function Restcard({restraunts}) {
    console.log(restraunts);
  return (
    <>
    <Link to={`/view/${restraunts.id}`}>
    <Card className='cards mt-2' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={restraunts.photograph} />
      <Card.Body className='m-2'  >
        <Card.Title className='text text-dark '>{restraunts.name}</Card.Title>
        <Card.Text className='text text-dark'>
        {restraunts.address}
        {restraunts.cuisine_type}
        {restraunts.neighborhood}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Link>
    </>
  )
}

export default Restcard