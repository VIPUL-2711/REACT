import { LoaderCircle, User } from 'lucide-react'
import React from 'react'

const App = () => {
  // const add=localStorage.setItem('user','vipul')
  // const add1=localStorage.setItem('age','18')
  // const see=localStorage.getItem('user')
  // localStorage.removeItem('age')
  // localStorage.clear()
  const obj={
    name1:'vipul',
    age:18,
  }
  localStorage.setItem('obj',JSON.stringify(obj));


  console.log(see)
  return (
    <div>

    </div>
  )
}

export default App