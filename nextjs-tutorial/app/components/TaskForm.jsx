import { createTask } from "@/utils/actions"

const TaskForm = () => {
  return (
    <form action={createTask}>
        <div className='join w-full'>
            <input type="text" placeholder="Type here" className="input input-bordered join-item w-full input-primary flex-1" name='content' required />
            <button type='submit' className='btn btn-primary join-item'>CREATE TASK</button>
        </div>
    </form>
  )
}


export default TaskForm