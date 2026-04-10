import React from 'react'
import Rightpartcontent from './Rightpartcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative rounded-4xl'>
      
      <img 
        className='h-full w-full object-cover' 
        src={props.img} 
        alt="" 
      />  
      <Rightpartcontent id={props.id} tag={props.tag}c color={props.color}/>
    </div>
  )
}

export default Rightcard