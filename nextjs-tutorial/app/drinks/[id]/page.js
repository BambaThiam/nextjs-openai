import Link from "next/link";
const URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

import drinkImg from "./drink.jpg"
import Image from "next/image";

// const URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const getSingleDrink = async (id) => {
  const response = await fetch(`${URL}${id}`);
  if(!response.ok) {
    throw new Error('Failed to fetch drinks...');
  }
  const dataURL = await response.json();
  return dataURL
}
const SingleDrinkPage = async ({params}) => {
    const data = await getSingleDrink(params.id)
    const title = data?.drinks[0]?.strDrink
    const imgSrc = data?.drinks[0]?.strDrinkThumb
  return (
    <div >
      <Link href="/drinks" className='btn btn-primary mt-8 mb-12'>back to drinks</Link>
      {/* <img src={imgSrc} alt={title} /> */}
      {/* <Image src={drinkImg} alt={title} className='w-48 h-48 rounded' /> */}
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className='w-48 h-48 rounded shadow-lg mb-4'
        priority
        alt=''
      />
      <h1 className='text-4xl mb-8'>{title}</h1>
    </div>
  )
}

export default SingleDrinkPage