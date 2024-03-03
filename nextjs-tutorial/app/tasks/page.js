"use client"

import React, { useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
// import TaskListItem from '../components/TaskListItem'

// const taskList = []
const TasksPage = () => {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])



  const onChangeHandler = (e) => {
    setTask(e.target.value)
  }

  const handleSubmitHandler = (e) => {
        e.preventDefault()
        // console.log({taskList})
        setTaskList((prev) => [...prev, task])
        console.log(taskList)
        // console.log(task)
        
    }
  return (
    <div className='max-w-xl' >
      <TaskForm task={task} onChangeHandler={onChangeHandler} handleSubmitHandler={handleSubmitHandler} />
      <TaskList taskList={taskList} />
    </div>
  )
}

export default TasksPage