

const SingleDrinkPage = ({params}) => {
    console.log(params.id)
  return (
    <div className='text-7xl' >{params.id}</div>
  )
}

export default SingleDrinkPage