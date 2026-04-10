import React from 'react'
import Navbar from './Navbar'
import Page01content from './Page01content'


const section1 = (props) => {
  return (
    <div className='h-screen w-full'>
        <Navbar/>
        <Page01content users={props.users}/>
    </div>

  )
}

export default section1