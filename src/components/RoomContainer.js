import React, { useContext } from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { MyContext } from '../MyContext'
import Loading from './Loading'
import Title from './Title'

const RoomContainer = () => {
    const {rooms,sortedRooms,loading}= useContext(MyContext)
    if (loading ) {
        return <Loading />
    }
       
  return (
    <>
      
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms}/>
    </>
  )
}

export default RoomContainer
