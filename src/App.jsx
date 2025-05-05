import './App.css'
import { useState } from 'react'
import chef from "./assets/chef.gif"
import Recipe from './Recipe'
import Ingredient from './Ingredient'
import FormInput from './FormInput'
import { getRecipeFromMistral } from './AIConfig'
function App() {
const [ingredient,setIngredient] = useState([])
const [recipe, setRecipe] = useState("")
const AIrespond =  async () => {
  const respondFromAI = await getRecipeFromMistral(ingredient)
  setRecipe(respondFromAI)
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
