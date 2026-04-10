import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0);
  function increasenum(){
    setnum(num+1);
  }
  function decreasenum(){
    setnum(num-1);
  }
  function increase5num(){
    setnum(num+5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <br />
      <button onClick={increasenum}>increase</button>
      <button onClick={decreasenum }>decrease</button>
      <button onClick={increase5num}>increase by 5 </button>
    </div>
  )
}

export default App
