import React from 'react';
import './Portfolio1.css';

// function Portfolio1 ({title, imageUrl, body}) {
function Portfolio1 (props) {
  return (
   
   <div className='card-container' >
      <div className='image-container' >
        <img src={props.img} alt='' />
      </div>
      <div className='card-content' >
        <div className='card-title' >
          <h3>{props.title}</h3>
        </div>
        <div className='card-body' >
          <p>{props.description}</p>
        </div>
      <div>
        <button className='card-btn' onClick={props.inlink} >View More</button>
      </div>
     </div>
   </div>
  )
};

export default Portfolio1;