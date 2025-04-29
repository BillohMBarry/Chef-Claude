import './App.css'
import { useState } from 'react'

function App() {
  const [ingredient,setIngredient] = useState([""])
  const addIngredient = (FormData) => {
    const items = FormData.get("ingredients")
    setIngredient(preIngredient => [...preIngredient, items])
    console.log(items)
  }
  return (
    <>
      <header>
        <h3>CHEF CLAUDE</h3>
      </header>
      <section>
        <form action={addIngredient}>
          <input type="text" placeholder='e.g onions' name="ingredients"  />
          <button>Add Ingredient</button>
        </form>
        <h1>Ingredient on hand:</h1>
        <ul>
          <li>{ingredient}</li>
        </ul>
      </section>
   
    </>
  )
}

export default App
