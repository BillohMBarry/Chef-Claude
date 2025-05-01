import './App.css'
import { useState } from 'react'
import chef from "./assets/chef.gif"

function App() {
const [ingredient,setIngredient] = useState(["fish","chicken","meat","pepper"])
const [recipeShown, setRecipeShown] = useState(false)

const ingredientList = ingredient.map((foodItems,index) => (
  <ul key={index}>
    <li>{foodItems}</li>
  </ul>
))
const addIngredient = (FormData) => {
const items = FormData.get("ingredients")
setIngredient(prevItems => [...prevItems, items])
}

const AIrespond = () => {
  setRecipeShown(prevShown => !prevShown)
} 

return (
  <>
    <header>
      <img src={chef} alt="chef-icon" />
      <h1>CHEF CLAUDE</h1>
    </header>
    <section className='chefClaudeSection'> 
      <form action={addIngredient} >
       <input type="text"
       placeholder='e.g onions'
       name="ingredients"
       aria-label='Add ingredent'  />
       <button className='Ingredient-btn'>Add Ingredient</button>
      </form>
      {ingredient.length > 0 ? (
        <section>
          <h2>Ingredient on Hand:</h2>
          {ingredientList}
          {ingredient.length > 3 && <div className="recipe-container">
            <div>
              <h3>Ready for a recipe</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button className='getRecipe-btn' onClick={AIrespond}>Get a Recipe</button>
          </div>}
        </section>
      ) : <h2>No Ingredient:</h2>}
     {recipeShown && <section>
        <div className=''>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit autem accusamus atque eum magnam officia dolor officiis dicta. Soluta praesentium et vero ratione minus repudiandae possimus cum ducimus voluptates.</p>
        </div>
      </section>}
    </section>
  
  </>
  )
}

export default App
