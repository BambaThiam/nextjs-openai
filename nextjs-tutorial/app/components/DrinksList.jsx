import Link from "next/link"
const DrinksList = ({drinks}) => {
  return (
    <div>
        <ul className='menu menu-vertical pl-0'>
            {
                drinks.map((drink) => <li key={drink.idDrink}>
                    <Link href={`/drinks/${drink.idDrink}`}>
                        {drink.strDrink}
                    </Link>
                </li>)
            }
        </ul>
    </div>
  )
}

export default DrinksList