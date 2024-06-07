import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const { value } = useSelector((state) => state.counterReducer);

  return (
    <div className='mt-5 w-[80%] mx-auto p-10'>
      <h1 className='text-4xl'>Counter: {value}</h1>
    </div>
  )
}

export default App
