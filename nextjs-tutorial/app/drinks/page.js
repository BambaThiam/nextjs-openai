import React from 'react'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
// const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=ab'

const fetchDrinks = async () => {
    // just for demo purposes
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error('Failed to fetch drinks...');
    }
    const data = await response.json();
    return data;
}


const DrinksPage = async () => {
   const data = await fetchDrinks()
   console.log(data)
    return (
      <div className='text-7xl'>DrinksPage</div>
    )
}

export default DrinksPage