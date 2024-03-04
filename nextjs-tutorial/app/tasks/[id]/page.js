import EditForm from '@/app/components/EditForm'
import { getTask } from '@/utils/actions'
import Link from 'next/link'

const SingleTaskPage = async ({params}) => {
  const task = await getTask(params.id)
  if (!task) {
    return <h1>Task not found</h1>
  }
return (
  <>
    <div className='mb-16'>
      <Link href='/tasks' className='btn btn-accent'>
        Back to Tasks
      </Link>
    </div>
    <EditForm task={task} />
  </>
)
}

export default SingleTaskPage

