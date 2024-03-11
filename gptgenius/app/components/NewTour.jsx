"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import {createNewTour, generateTourResponse, getExistingTour } from "@/utils/action"
import TourInfo from "./TourInfo"
import { toast } from "react-hot-toast"
// import { useState } from "react"

const NewTour = () => {
  // const [city, setCity] = useState('')
  // const [country, setCountry] = useState('')
  const { mutate, isPending, data: tour } = useMutation({
    mutationFn: async(destination) => {
      const newTour = await generateTourResponse(destination)
      if (!newTour) {
        toast.error('No matching city found...')
        return
      }
      toast.success('Tour created successfully!')
      return newTour
    }
  })
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const destination = Object.fromEntries(formData.entries())
    mutate(destination)
  }

  if (isPending) {
    return <span className='loading loading-lg'></span>;
  }
  return (
    <div>
        <form onSubmit={handleSubmit} className='max-w-2xl'>
          <h2 className=' mb-4'>Select your dream destination</h2>
          <div className='join w-full'>
            <input type="text" placeholder="City" name="city" className='input input-bordered join-item w-full' required />
            <input type="text" placeholder="Country" name="country" className='input input-bordered join-item w-full' required />
            <button className='btn btn-primary join-item' type='submit' disabled={isPending}>
            generate tour</button>
          </div>
        </form>
        <div className="mt-16">
        <div className='mt-16'>{tour ? <TourInfo tour={tour} /> : null}</div>
        </div>
    </div>
  )
}

export default NewTour