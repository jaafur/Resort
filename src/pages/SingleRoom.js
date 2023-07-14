import React, { Component, useContext } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import { MyContext } from '../MyContext'
import { useParams } from 'react-router-dom'
import StyledHero from '../components/StyledHero'
import defaultImage from '../images/defaultBcg.jpeg'


const SingleRoom = (props) => {
  let {slug} = useParams()
 const { getRoom } = useContext(MyContext)
  const room = getRoom(slug)
  console.log(room)
  if (!room) {
    return <div className='error'>
      <h3>Not Found...</h3>
      <Link to='/rooms' className='btn-primary'>Back to rooms</Link>
    </div>
    
  }
  const {name,description,capacity,size,price,extras,breakfast,pets,images} =room
  const [mainImage,...defaultImages] = images
  return (
    <>
    <StyledHero images={mainImage || defaultImage}>
      <Banner title={`${name}room`}>
        <Link to='/rooms' className='btn-primary'>Back to rooms</Link>
      </Banner>
      {/* Hello From My single room :{slug} */}
    </StyledHero>
    <section className='single-room'>
      <div className='single-room-images'>
      {defaultImages.map((image, index) => {
        return <img key={index} src={image} alt={name}/>
      })}
      </div>
      <div className='single-room-info'>
        <article className='desc'>
        <h3>Details</h3>
        <p>{description}</p>
        </article>
      </div>
        <article className='info'>
        <h3>Info</h3>
        <h6>Price :${price}</h6>
        <h6>Size :{size} SQFT</h6>
        <h6>Capacity :{capacity>1?`${capacity} People`:`${capacity} person`}</h6>
        <h6>{pets?'pets are allowed':'pets are not allowed'}</h6>
        <h6>{breakfast&&'free breakfast included'}</h6>
        </article>
    </section>
    <section className='room-extras'>
      <h6>Extras</h6>
      <ul className='extras'>
        {extras.map((item, index) => {
          return <li key={index}>-{item}</li>
        })}
      </ul> 
    </section>
    </>
  )
}

export default SingleRoom
