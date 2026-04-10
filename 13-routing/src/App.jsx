import React from 'react'

import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

const App = () => {
  return (
    <div className='nav'>
      <h3>Homepage</h3>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
    </div>

    
  )
}

export default App