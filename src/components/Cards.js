import React from 'react'
import './Cards.scss'

function Cards (props) {

  return (
    <>      
      <div className='card'>
          <div className='card__body'>
             <img src={props.img} alt='One Page Bible' className='card__image' />
             <h2 className='card__title'>{props.title}</h2>
             <p className='card__description'>
               {props.description}
             </p>
             <button className='card__btn' onClick={props.inlink}>Go See</button>
          </div>
      </div>
    </>
  )
}

export default Cards;

/*
function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} class="card__image" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <button className="card__btn">View Recipe</button>
    </div>
  );
}
*/
