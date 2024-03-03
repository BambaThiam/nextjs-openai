import { revalidatePath } from "next/cache"

const createTask = async (formData) => {
    "use server"
    const content = formData.get('content')
    // console.log(content)
    await prisma.task.create({
        data: {
            content
        }
    })
    revalidatePath('/tasks')
    
}
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