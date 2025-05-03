import React from 'react'

function Ingredient({ingredient,AIrespond}) {
    const ingredientList = ingredient.map((foodItems,index) => (
        <ul key={index}>
          <li>{foodItems}</li>
        </ul>
    ))
  return (
    <>
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
    </>
  )
}

export default Ingredient