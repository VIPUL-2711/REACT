import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const [index, setIndex] = useState(1)
  const [loading, setLoading] = useState(false)
  const showdata = async () => {
  setLoading(true)
  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
  setData(response.data)
  setLoading(false)
}
  useEffect(function(){
    showdata()
  },[index])

  let printimages=<h3>loading</h3>
  

  if(data.length>0){
    printimages=data.map(function(elem,idx){
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
        <div className='h-40 w-44 overflow-hidden bg-white'>
        <img className='h-full w-full object-cover' src={elem.download_url}/>
      </div>
        <h2 className='text-white font-bond text-lg'>{elem.author}</h2>
      </a>
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen w-screen '>
      <div className=' flex flex-wrap gap-8 overflow-hidden m-4 '>
        {printimages}
      </div>
      <div className='flex justify-center items-center gap-6 p-6' >
        <button 
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
          }
        }}
        className='text-black cursor-pointer font-bold  text-sm active:scale-95 bg-amber-400 px-4 rounded py-2'>
          prev
          </button>
          <h3 className='text-white font-bold '>Page {index}</h3>
        <button 
        onClick={()=>{
          console.log('next wala')
          setIndex(index+1)
        }}
        className='text-black cursor-pointer font-bold   text-sm active:scale-95 bg-amber-400 px-4 rounded py-2'>
          next
          </button>
      </div>
    </div>
  )
}

export default App