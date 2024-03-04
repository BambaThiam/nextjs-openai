"use client"

// import { createTask } from "@/utils/actions"
import { createTaskCustom } from "@/utils/actions"
import { useEffect } from "react"
import { useFormStatus, useFormState } from "react-dom"
import { toast } from "react-hot-toast"


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
  useEffect(() => {
    if (state.message === 'error...') {
      toast.error("There was an error...")
      return
    }
    if (state.message === 'success!!!') {
      toast.success("Task created successfully")
      return
    }
  }, [state])
  
  return (
    <form action={formAction}>
      {/* {state.message ? <p className='mb-2'>{state.message}</p> : null} */}
        <div className='join w-full'>
            <input type="text" placeholder="Type here" className="input input-bordered join-item w-full input-primary flex-1" name='content' required />
            <SubmitBtn />
        </div>
    </form>
  )
}


export default TaskFormCustom