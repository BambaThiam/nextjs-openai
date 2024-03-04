"use client"

// import { createTask } from "@/utils/actions"
import { createTaskCustom } from "@/utils/actions"
import { useFormStatus } from "react-dom"

const SubmitBtn = () => {
  const {pending} = useFormStatus()
  return (
    <button 
      type='submit'
      className='btn btn-primary join-item'
      disabled={pending}
      >
        {pending ? 'please wait...' : 'create task'}
    </button>
  )
}
const TaskFormCustom = () => {
  return (
    <form action={createTaskCustom}>
        <div className='join w-full'>
            <input type="text" placeholder="Type here" className="input input-bordered join-item w-full input-primary flex-1" name='content' required />
            {/* <button type='submit' className='btn btn-primary join-item'>CREATE TASK</button> */}
            <SubmitBtn />
        </div>
    </form>
  )
}


export default TaskFormCustom