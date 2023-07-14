import React ,{useContext} from 'react'
import { MyContext } from '../MyContext'
import Title from './Title'
import Loading from './Loading'
import Room from './Room'

const FeaturedRoom = () => {
  let { rooms, sortedRooms, featuredRooms, loading } = useContext(MyContext)
 rooms =featuredRooms.map((room) =>{
  return <Room key={room.id} room={room} />
})
  return (
    <section className='featured-rooms'>
       <Title title='Featured Rooms'/>
       <div className='featured-rooms-center'>
       {loading?<Loading />:rooms}
       </div>
    </section>
  )
}

export default FeaturedRoom
