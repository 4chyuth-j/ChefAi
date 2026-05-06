import { useState } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";

import { getRecipeFromMistral } from "../utils/ai";

const Main = () => {

  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);
  const [recipe,setRecipe] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient").trim();
    if (newIngredient !== "") {
      setIngredients(curr => [...curr, newIngredient]);
      e.currentTarget.reset();
    }
  }

  async function  toggleRecipeShown() {
    
    const generatedRecipe = await getRecipeFromMistral(ingredients);

    setRecipe(generatedRecipe);

    setRecipeShown(true);
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


      {
        ingredients.length > 0 &&
        <IngredientsList
          toggleRecipeShown={toggleRecipeShown}
          ingredients={ingredients}
        />
      }

      {
        recipeShown &&
        <ClaudeRecipe recipe={recipe} />
      }


    </main>
  )
}

export default Main
