import React from 'react'

const App = () => {
  const scroll=(elem)=>{
    if(elem>0){
      console.log("seedha ghummooooo");
    }
    else{
      console.log("ulta ghomooooooop");
      
    }
    
    
  }
  return (

    <div onWheel={(elem)=>{
      scroll(elem.deltaY);
    }}>

      {/* <button onDoubleClick={function btnclicked(){
        console.log("hello guys btn is clicked");
      }}>click me</button> */}
      {/* <input onChange={function(elem){
        inputchange(elem.target.value)
      }}
      type="text"
      placeholder='"en
      ter the name'
      /> */}
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>


    </div>
  )
}

export default App