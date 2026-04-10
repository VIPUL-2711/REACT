import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const submiting = (elem)=>{ 
    elem.preventDefault();
    const copytask=[...task];
    // console.log(copytask)
    copytask.push({title,details})
    setTask(copytask)
    setTitle('')
    setDetails('')
    
  }
  const clicked=(idx)=>{
    const copytask=[...task];
    copytask.splice(idx,1)
    setTask(copytask)
  }
  return (
    <div className=' h-screen flex flex-col lg:flex-row'> 
      <form onSubmit={(elem)=>{
        submiting(elem);
      }} className='flex flex-col items-start px-10 py-10 gap-6 lg:w-1/2'>
        <h1 className= 'px-10 text-white font-bold text-3xl'>Add Notes</h1>
        <input  
        className='h-12 w-full md:w-2/3 text-2xl outline-none text-white border-2 rounded-3xl px-10 ' 
        type="text" 
        placeholder='Enter your name'
        value={title}
        onChange={(elem)=>{
          setTitle(elem.target.value)
        }}
        />
        <textarea className='h-32 w-full md:w-2/3  text-2xl outline-none  text-white border-2  rounded-2xl px-10 py-6' 
        type="text" 
        placeholder='Enter the details'
        value={details}
        onChange={(elem)=>{
          setDetails(elem.target.value)
        }}
        />
        <button type='submit'
        className= 'h-12 active:scale-75 w-full md:w-2/3 text-2xl bg-white py-2 rounded-2xl'>apply</button>
      </form>
        <div className='lg:w-1/2 border-l-2 border-white p-10'>
          <h1 className='text-3xl font-bold text-white'>Your notes</h1>
          <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
            {task.map((elem,idx)=>{
              return <div key={idx} className='h-52 w-40 rounded-xl px-2 py-8  flex  justify-between flex-col bg-cover bg-[url(https://cdn.pixabay.com/photo/2013/07/13/11/55/notes-158958_1280.png)] bg-white'>
               <div>
                 <h2 className='leading-tight text-xl font-bold text-black'>
                  {elem.title}
                </h2>
                <p className='mt-1 px-3 leading-tight font-medium text-black text-sm'>
                   {elem.details}
                 </p>
               </div>
               <button  key={idx} onClick={()=>{
                clicked(idx)
               }}
               className='bg-red-400 cursor-pointer active:scale-95 rounded-2xl  '>delete</button>
              </div>
            })}
          </div>
        </div>
    </div>
  )
}

export default App