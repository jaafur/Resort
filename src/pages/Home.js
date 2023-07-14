import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import { MyContext } from '../MyContext';
import FeaturedRoom from '../components/FeaturedRoom';




const Home = () => {
  const { rooms, sortedRooms, featuredRooms, loading } = useContext(MyContext)
  
 

  return (
    <>
      <Hero>
        <Banner title='Luxurious Rooms' subTitle='Delux rooms starts at 200$'>
          <Link to='/rooms'>
            <button className='btn-primary'>Our rooms</button>
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
      
      <Outlet />
    </>
  );
};
export default Home;
