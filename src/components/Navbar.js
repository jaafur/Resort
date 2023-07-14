import React, { useState } from 'react'
import logo from '../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons'
import {Link }from 'react-router-dom'
const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const handleToggle = ()=>{
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
   
  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <div className='nav-header'>
                <Link to='/'>
                  <img src={logo} alt='beach resort'/>
                </Link>
                <button className='nav-btn' type='button'>
                  <FontAwesomeIcon icon={faAlignRight} className='nav-icon' onClick={handleToggle} />
                </button>

            </div>
        <ul className={isOpen?'nav-links show-nav':'nav-links'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/rooms'>Rooms</Link>
            </li>
        </ul>
        </div>
      {/* <FontAwesomeIcon icon={faBarsStaggered} /> */}
      
    </nav>
  )
}

export default Navbar
