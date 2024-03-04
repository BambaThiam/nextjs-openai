'use server'

import prisma from "./db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

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
export const createTaskCustom = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
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

export const getTask = async (id) => {
    const task = await prisma.task.findUnique({
        where: {
            id
        }
    })
    return task
}

export const editTask = async (formData) => {
    const id = formData.get('id')
    const content = formData.get('content')
    const completed = formData.get('completed');

    await prisma.task.update({
        where: {
            id
        },
        data: {
            content: content,
            completed: completed === 'on' ? true : false,
    },
  });
  // redirect won't works unless the component has 'use client'
  // another option, setup the editTask in the component directly
  redirect('/tasks');
}