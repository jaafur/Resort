import React from 'react'
import { Link } from 'react-router-dom'
import defaultImage from '../images/defaultBcg.jpeg'
import propTypes from 'prop-types'


const Room = ({room}) => {
    let {name,slug,images,price} =room
  return (
    <article className='room'>
      <div className='img-container'>
        <img src={images[0] || defaultImage} alt='single room'/>
        <div className='price-top'>
            <h6>${price}</h6>
            <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className='btn-primary room-link'>Features</Link>
        <p className='room-info'>{name}</p>
      </div>
    </article>
  )
}

Room.propTypes={
    room:propTypes.shape({
        name:propTypes.string.isRequired,
        slug:propTypes.string.isRequired,
        images:propTypes.arrayOf(propTypes.string.isRequired).isRequired,
        price:propTypes.number.isRequired
    })
}
export default Room
