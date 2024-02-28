import Link from "next/link";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

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
      <h1 className='text-4xl mb-8'>{title}</h1>
      <img src={imgSrc} alt={title} />
    </div>
  )
}

export default SingleDrinkPage