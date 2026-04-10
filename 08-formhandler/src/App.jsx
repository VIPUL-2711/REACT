import React, { useState } from 'react'

const App = () => {
  const [tittle, settittle] = useState('')
  const submithandler = (elem)=>{
    elem.preventDefault();
    console.log('form submitted by ',tittle);
    settittle('')
  }
  return (
    <div>
      <form onSubmit={(elem)=>{
        submithandler(elem);
      }}>
        <input
        type="text"
        placeholder='enter your name' 
        value={tittle}
        onChange={(elem)=>{
          settittle(elem.target.value)
        }}
        />
        <button>click me</button>
      </form>
    </div>
  )
}

export default App