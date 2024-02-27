"use client"

const error = (error) => {
    console.log(error)
  return (
    // <div>there was an error...</div>
    <div>{error.error.message}</div>
  )
}

export default error