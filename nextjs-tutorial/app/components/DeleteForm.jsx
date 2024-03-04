"use client"

import { deleteTask } from '@/utils/actions'
import { useEffect } from 'react'
import { useFormStatus, useFormState } from "react-dom"
import { toast } from "react-hot-toast"

const SubmitBtn = () => {
  const {pending} = useFormStatus()
  return (
    <button 
      type='submit'
      className='btn btn-error btn-xs join-item'
      disabled={pending}
      >
        {pending ? 'please wait...' : 'delete'}
    </button>
  )
}

const initialState = {
  message: null
}
const DeleteForm = ({id}) => {
  const [state, formAction] = useFormState(deleteTask, initialState)
  useEffect(() => {
    if (state.message === 'error...') {
      toast.error("There was an error for deleting...")
      return
    }
    if (state.message === 'success!!!') {
      toast.success("Task deleted")
      return
    }
  }, [state])
  return (
    <form action={formAction}>
        <input type="hidden" name='id' value={id} />
        <SubmitBtn />
    </form>
  )
}

export default DeleteForm