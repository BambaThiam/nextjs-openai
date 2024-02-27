"use client"
import { useState } from 'react'

const ClientPage = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='text-7xl flex gap-4 m-4'>
      <button onClick={() => setCount((prevCount) => prevCount - 1)} className='btn btn-primary'>Decrease</button>
      <button className='btn'>{count}</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)} className='btn btn-primary'>Increase</button>
    </div>
  )
}

export default ClientPage