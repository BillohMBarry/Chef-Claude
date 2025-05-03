export default function FormInput({setIngredient}) {
    const addIngredient = (FormData) => {
        const items = FormData.get("ingredients")
        setIngredient(prevItems => [...prevItems, items])
    }
  return (
    <>
        <form action={addIngredient} >
            <input type="text"
            placeholder='e.g onions'
            name="ingredients"
            aria-label='Add ingredent'  />
            <button className='Ingredient-btn'>Add Ingredient</button>
        </form>
    </>
  )
}
