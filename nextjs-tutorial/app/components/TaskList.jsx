import { getAllTasks } from '@/utils/actions'

import DeleteForm from './DeleteForm'
import Link from 'next/link'
  
  const TaskList = async() => {
    const tasks = await getAllTasks()
    // if (!tasks) {
    if (tasks.length === 0) {
      return <h2 className='mt-8 font-medium text-lg'>No tasks to show...</h2>
    }
    return (
      <ul className='mt-8'>
        {tasks.map((task) => (
          <li key={task.id} className='flex gap-4 mt-4 p-4 bg-white rounded-xl drop-shadow-2xl justify-center items-center'>
            <h1 className={`flex-1 text-lg capitalize ${task.completed ? 'line-through' : 'null'}`}>{task.content}</h1>
            <div className='flex gap-4 items-center'>
              {/* <button className="btn btn-success">EDIT</button>
              <button className="btn btn-error">DELETE</button> */}
              <Link href={`/tasks/${task.id}`} className="btn btn-accent btn-xs">EDIT</Link>
              <DeleteForm id={task.id} />
            </div>
          </li>
        ))}
      </ul>
    )
  }
  
  export default TaskList


