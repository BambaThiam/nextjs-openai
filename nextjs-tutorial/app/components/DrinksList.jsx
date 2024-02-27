import Link from "next/link"
const DrinksList = ({drinks}) => {
  return (
    <div>
        <ul>
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