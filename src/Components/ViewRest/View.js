import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from '../RestOp/Restop';
import Restreview from '../RestReview/Restreview';

function View() {
    //to hold particular restraunt details
    const[RestDetails,setRestDetails]=useState([])
    // const pathParameter = useParams()
    // console.log(pathParameter.id);

    const{id}=useParams()
    console.log(id);

    //api call for fetch particular restraunt details
    const fetchData=async()=>{
        const {data} = await axios.get(`http://localhost:3001/restaurants/${id}`)
        console.log(data);
        setRestDetails(data)
    }
    console.log(RestDetails);
    // function call 
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <>
    <Row>
        <Col sm={12} md={3}>
        {/* image  */}
        <Image className="rounded border border-2 m-3" src={RestDetails.photograph} fluid/>
        </Col>
        <Col>
        <h1 className="text-center text-dark">{RestDetails.name}</h1>
        <div className='container w-50 mb-5 '>
        <ListGroup className='shadow text-dark'>
      <ListGroup.Item>Neighborhood: {RestDetails.neighborhood} </ListGroup.Item>
      <ListGroup.Item>cuisine_type: {RestDetails.cuisine_type} </ListGroup.Item>
      <ListGroup.Item>Address:{RestDetails.address} </ListGroup.Item>
      <ListGroup.Item> <Restop op={RestDetails.operating_hours}/></ListGroup.Item>
      <ListGroup.Item><Restreview review={RestDetails.reviews}/></ListGroup.Item>
    </ListGroup>
        </div>
        </Col>
       

    </Row>
    </>
  )
}

export default View