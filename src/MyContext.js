
import React, { useState, useEffect, createContext } from 'react';
import items from './data'
import Home from './pages/Home';

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [price,setPrice] =useState(0)
  const [type,setType] = useState('all')
  const [capacity,setCapacity] = useState(1)
  const [maxPrice,setMaxPrice] = useState(0)
  const [minSize,setMinSize] = useState(0)
  const [maxSize,setMaxSize] = useState(0)
  const [breakfast,setBreakfast] =useState(false)
  const [pets,setPets] = useState(false)
  
  const [value,setValue] = useState('')



  useEffect(() => {
    let filteredRooms = rooms;

    if (type !== 'all') {
      filteredRooms = filteredRooms.filter((room) => room.type === type);
    }
  
    filteredRooms = filteredRooms.filter(
      (room) => room.capacity >= parseInt(capacity) &&
       room.price <= parseInt(price) &&  
       (room.size >= parseInt(minSize) && room.size <= parseInt(maxSize))&&
       room.breakfast === breakfast &&
       room.pets === pets
    );
    setSortedRooms(filteredRooms);
    // console.log(filteredRooms)
  }, [type, capacity,price,maxPrice,minSize,maxSize, breakfast,pets,rooms]);
  
  useEffect(() => {
    const formatData = (items) => {
      return items.map((item) => {
        const id = item.sys.id;
        const images = item.fields.images.map((image) => image.fields.file.url);
        const room = { ...item.fields, id, images,gneralType:'all' };
        return room;
      });
    };
  
    const rooms = formatData(items);
    const featuredRooms = rooms.filter((room) => room.featured);
    const maxPrice = Math.max(...rooms.map((room) => room.price));
    const maxSize = Math.max(...rooms.map((room) => room.size));
  
    setRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setLoading(false);
    setMaxPrice(maxPrice);
    setMaxSize(maxSize);
    setPrice(maxPrice)
    
  }, []);
 

  const getRoom =(slug)=>{
    let foundRoom =rooms.find(room =>{return room.slug ===slug} )
    return foundRoom
  }




 


  function handleType(e) {
    const value = e.target.value;
    setType(value);
  }
  function handleCapacity(e) {
    let value = e.target.value;
      // let newCapacity = parseInt(value)
           setCapacity(value)
  }
  
 function handlePrice(e){
  let value = e.target.value
  // let newPrice = parseInt(value)
  // console.log(typeof(newPrice))
  setPrice(value)
 }  

 function handleMinSize(e){
  let value = e.target.value
  // let newMinSize = parseInt(value)
  setMinSize(value)
 }

 function handleMaxSize(e){
  let value = e.target.value
  // let newMaxSize = parseInt(value)
  // console.log(value)
  setMaxSize(value)
 }

 function handleBreakfast(e){
  let value = e.target.checked
  setBreakfast(value)
  
 }

 function handlePets(e){
  let value = e.target.checked
  setPets(value)
  
 }

  const tempContextValue = {
    rooms,
    sortedRooms,
    featuredRooms,
    loading,
    type,
    capacity,
    price,
    minPrice :0,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets 
  };
  const contextValue ={...tempContextValue,getRoom,
    handleType,
    handleCapacity,
    handlePrice,
    handleMinSize,
    handleMaxSize,
    handleBreakfast,
    handlePets
  }
  return <MyContext.Provider value={contextValue}>
    {children}
    
    </MyContext.Provider>;
};

export default MyContextProvider;