import React, { useContext } from 'react'
import { MyContext } from '../MyContext'
import Title from './Title'

const getUnique = (items,value)=>{
    return [...new Set(items.map((item) => item[value]))]
}
const RoomsFilter = () => {
    const context = useContext(MyContext)
    const {
        rooms,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        handleType,
        handleCapacity,
        handlePrice,
        handleMinSize,
        handleMaxSize,
        handleBreakfast,
        handlePets
            }=context
   

        let types = getUnique(rooms,'type')
               types =[...types,'all']
               types=types.map((value, index,) => {return <option value ={value} key={index}>{value}</option>})
        
        let capacities = getUnique(rooms,'capacity')
             capacities=capacities.map((value,index) => {return  <option value ={value} key={index}>{value}</option> })
            
             
  return (
    <section className='filter-container'>
    <Title title='Search Rooms'/>
      <form className='filter-form'>

      <div className='form-group'>
        <label htmlFor='type'>Room Type</label>
        <select name='type' id='type' value={type} className='form-control'  onChange={handleType}>
          {types}
         </select>
      </div>

      <div className='form-group'>
        <label htmlFor='capacity'>Capacity</label>
        <select name='capacity' id='capacity' value={capacity} className='form-control'  onChange={handleCapacity}>
          {capacities}
         </select>
      </div>
     
      <div className='form-group'>
        <label htmlFor='price'>Price is ${price}</label>
        <input type='range' min={minPrice} max={maxPrice} 
               name='price' id='price' value={price}   className='form-control' onChange={handlePrice}/>
      </div>

      <div className='form-group'>
         <label htmlFor='size'>Room Size</label>
         <div className='size-inputs'>
           <input type='number' value={minSize} className='size-input' id='size' onChange={handleMinSize}/>
           <input type='number' value={maxSize} className='size-input' id='size' onChange={handleMaxSize}/>
         </div>
      </div>
     
      <div className='form-group'>
         <div className='single-extra'>
           <input type='checkbox' id='breakfast' checked ={breakfast} onChange={handleBreakfast}/>
           <label htmlFor='breakfast'>Break fast</label>
         </div>
         <div className='single-extra'>
           <input type='checkbox' id='pets' checked ={pets} onChange={handlePets}/>
           <label htmlFor='pets'>pets</label>
         </div>
      </div>
      </form>
    </section>
  )
}

export default RoomsFilter
