'use server'

import prisma from "./db"
import { revalidatePath } from "next/cache"

export const getAllTasks = async () => {
    const tasks = await prisma.task.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      })
    return tasks
}
export const createTask = async (formData) => {
    const content = formData.get('content')
    // console.log(content)
    await prisma.task.create({
        data: {
            content
        }
    })
    revalidatePath('/tasks')
    
}

export const deleteTask = async (formData) => {
    const id = formData.get('id')
    await prisma.task.delete({
        where: {
            id
        }
    })
    revalidatePath('/tasks')
}