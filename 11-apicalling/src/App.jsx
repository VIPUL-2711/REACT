import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  const response= async ()=>{
    
    const res= await axios.get('https://picsum.photos/v2/list')
    setData(res.data)
    console.log(res)

  }
  return (
    <div>
      <button onClick={response}>click me to get response</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>{elem.author}{idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App