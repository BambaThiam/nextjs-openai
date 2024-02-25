import Link from "next/link"

const HomePage = () => {
  return (
    <div>
      <h1 className='text-7xl font-bold'>HomePage</h1>
      <Link href="/about" className="text-2xl">About Page - </Link>
      <Link href="/contact" className="text-2xl">Contact Page</Link>
    </div>
  )
}

export default HomePage