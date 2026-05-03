import { useState } from "react";

const Main = () => {

  const [ingredients,setIngredients] = useState([]);


  function handleSubmit(e){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients(curr=>[...curr,newIngredient]);
    e.currentTarget.reset();
  }

  return (
    <main>
        <form 
            className="add-ingredient-form"
            onSubmit={handleSubmit}    
        >
            <input 
                type="text"  
                aria-label="Add Ingredient" 
                placeholder="eg: oregano"
                name="ingredient"
            />
            <button >Add Ingredient</button>
        </form>

        <ul>
          {ingredients.map((item,ind)=>{
              return <li key={ind}>{item}</li>
          })}
        </ul>

    </main>
  )
}

export default Main