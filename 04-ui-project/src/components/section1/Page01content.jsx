import React from 'react'
import Leftpart from './Leftpart'
import Rightpart from './Rightpart'


const Page01content = (props) => {
  return (
    <div className='py-15 flex items-center gap-10 h-[90vh] px-18'>
        <Leftpart/>
        <Rightpart users={props.users}/>
        
    </div>
  )
}

export default Page01content