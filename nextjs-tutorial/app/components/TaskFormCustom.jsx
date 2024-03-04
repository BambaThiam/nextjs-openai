"use client"

// import { createTask } from "@/utils/actions"
import { createTaskCustom } from "@/utils/actions"
import { useFormStatus, useFormState } from "react-dom"

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
const initialState = {
  message: null
}
const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState)
  return (
    <form action={formAction}>
      {state.message ? <p className='mb-2'>{state.message}</p> : null}
        <div className='join w-full'>
            <input type="text" placeholder="Type here" className="input input-bordered join-item w-full input-primary flex-1" name='content' required />
            <SubmitBtn />
        </div>
    </form>
  )
}


export default TaskFormCustom