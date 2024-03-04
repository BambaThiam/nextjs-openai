
// import TaskForm from '../components/TaskForm'
import TaskFormCustom from '../components/TaskFormCustom'
import TaskList from '../components/TaskList'

const TasksPage = () => {
  return (
    <div className='max-w-xl' >
      {/* <TaskForm /> */}
      <TaskFormCustom />
      <TaskList />
    </div>
  )
}

export default TasksPage