import {React ,useState} from 'react'
import Title from './Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMartiniGlassCitrus,faPersonHiking,faVanShuttle,faBeerMugEmpty} from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  const  [services , setServices] = useState([
        {
           icon:<FontAwesomeIcon icon={faMartiniGlassCitrus} />,
           title :'Free cocktails',
           info :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia'
         },
         {
           icon:<FontAwesomeIcon icon={faPersonHiking} />,
           title :'Endless Hiking',
           info :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia'
         },
         {
            icon:<FontAwesomeIcon icon={faVanShuttle} />,
            title :'Free Shuttle',
             info :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia'
         },
         {
            icon:<FontAwesomeIcon icon={faBeerMugEmpty} />,
            title :'Strongest Beer',
            info :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia'
         },
    ])
   
  return (
    <section className='services'>
      <Title title='Services'/>
      <div className='services-center'>
      {services.map((value,index) => (
           <article className='service' key={index}>
            <span>{value.icon}</span>
            <h6>{value.title}</h6>
            <p>{value.info}</p>
           </article>
      ))}
       </div>
    </section>
  )
}

export default Services
