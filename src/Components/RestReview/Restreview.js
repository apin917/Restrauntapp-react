import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


function Restreview({review}) {
  console.log(review);
  const [open, setOpen] = useState(false);
 

  return (
    <div>
           <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
       Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {review?.map((item)=>(
           <div className='border rounded border-danger mt-2 mb-2 p-2 '>
             <p>{item.name}</p>
             <p>{item.date}</p>
             <p>{item.rating}</p>
             <p>{item.comments}</p>
           </div>
          ))}
        </div>
      </Collapse>
     
    </div>
  )
}

export default Restreview