import './App.css'
import { useState } from 'react'
import chef from "./assets/chef.gif"
import Recipe from './Recipe'
import Ingredient from './Ingredient'
import FormInput from './FormInput'
function App() {
const [ingredient,setIngredient] = useState([])
const [recipeShown, setRecipeShown] = useState(false)
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
      <FormInput setIngredient={setIngredient} />
      <Ingredient ingredient={ingredient} AIrespond={AIrespond} />
      <Recipe recipeShown={recipeShown} />
    </section>
  
  </>
  )
}

export default App
