import React from 'react'

const Rightpartcontent = (props) => {
  return (
       <div className='absolute top-0 left-0 h-full w-full p-6 bg-black/40 flex flex-col justify-between text-white'> 
        <h1 className='bg-amber-50 h-12 w-12 flex items-center justify-center rounded-full font-medium text-black'>
          {props.id+1}
        </h1>
        <div className='space-y-4'>
          
          <p className='text-xl leading-relaxed mb-14'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestias laudantium ducimus nulla quaerat dolorum.
          </p>

          <div className='flex items-center justify-between'>
            <button style={{backgroundColor:props.color}} className='px-6 py-4 rounded-full font-medium text-sm'>
              {props.tag}
            </button>
            <button style={{backgroundColor:props.color}} className=' px-5 py-4 rounded-full'>
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>

        </div>

      </div> 
  )
}

export default Rightpartcontent