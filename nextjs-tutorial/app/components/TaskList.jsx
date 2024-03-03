import React from 'react'


const TaskListItem = ({task}) => {
    return (
      <div className='flex gap-4 mt-4 p-4 bg-white rounded-xl drop-shadow-2xl justify-center items-center'>
        <h1 className='flex-1'>{task}</h1>
        <div className='flex gap-4'>
          <button className="btn btn-success">EDIT</button>
          <button className="btn btn-error">DELETE</button>
        </div>
      </div>
    )
  }

  const TaskList = (taskList) => {
    // taskList = [taskList.taskList, ...taskList.taskList]
    return (
      <div>
        {taskList.taskList.map((task) => {
          return <TaskListItem key={task} task={task} />
        })}
      </div>
    )
  }
  
  export default TaskList


// const TaskList = ({task}) => {
//   return (
//     <div className='flex gap-4 mt-4 p-4 bg-white rounded-xl drop-shadow-2xl justify-center items-center'>
//       <h1 className='flex-1'>{task}</h1>
//       <div className='flex gap-4'>
//         <button className="btn btn-success">EDIT</button>
//         <button className="btn btn-error">DELETE</button>
//       </div>
//     </div>
//   )
// }

// export default TaskList

