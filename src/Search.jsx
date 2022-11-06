// import { useState, useEffect } from 'react'

// export default function Search({ props }) {

//     const [searchValue, setSearchValue] = useState();


//     const searchCocktails = async () => {
//         const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`);
//         const data = await response.json();
//         props.cocktails.setCocktails(data.drinks);
//     }

//     useEffect(() => {
//         const input = document.getElementById('search-input');
//         input.addEventListener('input', (e) => {
//             setSearchValue(e.target.value);
//         });
//     }, []);

//     useEffect(() => {
//         searchCocktails();
//     }, [searchValue]);




//     return (
//         <div className='search-bar'>
//             <input id='search-input' name='cocktail-name' type='text' />
//             <p>{props.drinks}</p>
//         </div>
//     )
// }

import { useState, useEffect } from 'react'
export default function Cocktail() {
    const [cocktails, setCocktails] = useState([]);
    const loadData = async () => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`);
        const data = await response.json();
        console.log(data);
        setCocktails(data.drinks);
    }
    const [searchInput, setSearchInput] = useState();
    const searchCocktail = (event) => {
        setSearchInput(
            event.target.value
        )
    }
    const loadCocktails = (e) => {
        e.preventDefault()
        loadData()
    }
    // useEffect(() => {
    //     loadData()
    // }, [searchInput])
    return (
        <div>
            <input
                type="text"
                placeholder="Search here"
                onKeyDown={searchCocktail} />
            <br />
            <button onClick={loadCocktails}>Search Drink</button>
            {cocktails.map((cocktail, key) => {
                return (<><h1 key={key}>{cocktail.strDrink}</h1>
                    <img src={cocktail.strDrinkThumb} alt="cocktail image" style={{ width: '300px', height: '300px', border: '2px solid white', borderRadius: '50%' }} />
                    <h2>Ingredients</h2>
                    <span>{cocktail.strIngredient1}</span><br />
                    <span>{cocktail.strIngredient2}</span><br />
                    <span>{cocktail.strIngredient3}</span><br />
                    <span>{cocktail.strIngredient4}</span><br />
                    <span>{cocktail.strIngredient5}</span><br />
                    <span>{cocktail.strIngredient6}</span><br />
                    <span>{cocktail.strIngredient7}</span><br />
                    <span>{cocktail.strIngredient8}</span><br />
                    <span>{cocktail.strIngredient9}</span><br />
                    <span>{cocktail.strIngredient10}</span><br />
                    <span>{cocktail.strIngredient11}</span><br />
                </>)
            })}
        </div>
    )
}