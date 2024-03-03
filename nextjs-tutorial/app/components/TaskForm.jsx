"use client"
import React, { useState } from 'react'

const TaskForm = ({task, handleSubmitHandler, onChangeHandler}) => {
    // const [content, setContent] = useState('')

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log({task})
    // }
  return (
    <form onSubmit={handleSubmitHandler} className='flex'>
      <input type="text" placeholder="Type here" className="input input-bordered input-primary flex-1 " onChange={onChangeHandler} />
      <button type='submit' className='btn btn-primary'>CREATE TASK</button>
    </form>
  )
}

export default TaskForm