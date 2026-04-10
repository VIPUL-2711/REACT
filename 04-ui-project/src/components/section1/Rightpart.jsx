import React from 'react'
import Rightcard from './Rightcard'

const rightpart = (props) => {
  return (
    <div id='right' className='h-full w-2/3  overflow-x-auto rounded-xl flex flex-nowrap gap-10 px-5 py-6' >
     {props.users.map(function(elem,idx){
      return <Rightcard key ={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color}/>
     })}
    </div>

  )
}

export default rightpart