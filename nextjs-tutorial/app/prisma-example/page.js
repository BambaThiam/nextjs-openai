import prisma from '@/utils/db'

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content : 'wake up'
    },
  })
  const allTasks = await prisma.task.findMany({
  orderBy: {
    createdAt: 'desc'
  }
})

  return allTasks
}
const PrismaExample = async () => {
  const tasks = await prismaHandlers()
  return (
    <div>
      <div className='text-7xl'>PrismaExample</div>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className='text-xl py-2'>
            😬{task.content}
          </h2>
        )
      })}
    </div>
  )
}

export default PrismaExample