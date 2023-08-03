import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div> 
         <Navbar className="bg-body-danger">
    <Container>
      <Navbar.Brand href="/">
        {' '}
      <h1> FUllON Restarunt</h1>
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header