import './App.css'
import { useState } from 'react'
import chef from "./assets/chef.gif"
import Ingredient from './Ingredient'
import Recipe from './Recipe'
import FormInput from './FormInput'
// import { getRecipeFromMistral } from './AIConfig'
function App() {
const [ingredient,setIngredient] = useState([])
const [recipe, setRecipe] = useState("")

const AIrespond =  async () => {
  // const ingredientList = ingredient.split(", ")
  // .map(item => item.trim())
  // .filter(item => item !== "")
  try {
    const response = await fetch("/.netlify/functions/recipe", {
      method: "POST",
      body: JSON.stringify({ingredient}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()
    if(response.ok) {
      setRecipe(data.response)
    }else {
      console.error(data.error)
      setRecipe("Sorry, I couldn't generate a recipe for you.")
    }
  } catch (error) {
    console.error(error)
  }

  // const respondFromAI = await getRecipeFromMistral(ingredient)
  // setRecipe(respondFromAI)
} 
return (
  <>
    <header>
      <img src={chef} alt="chef-icon" />
      <h1>CHEF CLAUDE</h1>
    </header>
    <section className='chefClaudeSection'> 
      <FormInput setIngredient={setIngredient} />
      <Ingredient ingredient={ingredient} AIrespond={AIrespond} />
      <Recipe recipe={recipe} />
    </section>
  
  </>
  )
}

export default App
