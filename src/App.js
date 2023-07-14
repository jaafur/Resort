import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import StyledHero from './components/StyledHero';




function App(){
  return (
    <>
    <Navbar />
    <Routes>
    <Route path='/' Component={Home} />
    <Route path='/rooms' Component={Rooms} />
    <Route path='/rooms/:slug' Component={SingleRoom} />
    <Route path='*' Component={Error} />
    </Routes> 
   
    </>
  )
}



export default App;
