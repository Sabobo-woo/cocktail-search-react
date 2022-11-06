
import './App.css';
import Cocktail from './Cocktail';
import { useState, useEffect } from 'react'
import Search from './Search';


function App() {


  const [data, setData] = useState(null)


  const getCocktail = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    const responseData = await response.json()
    setData(responseData)
  }


  useEffect(() => {
    getCocktail()
  }, [])







  return (
    <div className="App">
      <div>

        {
          data === null
            ? <h1>Loading..</h1>
            : (
              <>
                <Cocktail data={data.drinks[0]} />
                <Search props={data.drinks[0]} />
              </>
            )
        }

      </div>
    </div>
  );
}

export default App;
