import React, { useEffect, useState } from 'react';
import { IRecipe } from '../../models/IRecipe';
import jsonData from '../../resources/recipes.json';
import RecipeCard from './RecipeCard';

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Array<IRecipe>>([]);

  useEffect(() => {
    const recipesJson: Array<IRecipe> = JSON.parse(JSON.stringify(jsonData));
    setRecipes(recipesJson);
  }, []);

  return (
    <>
      <h1>Liste de recettes</h1>
      <ul>
        {recipes.map((recipe) => (
          <RecipeCard
            id={recipe.id}
            name={recipe.name}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            coverImage={recipe.coverImage}
            imageGalery={recipe.imageGalery}
            portions={recipe.portions}
            preparationTime={recipe.preparationTime}
            cookingTime={recipe.cookingTime}
            difficulty={recipe.difficulty}
            categorie={recipe.categorie}
            protein={recipe.protein}
          />
        ))}
      </ul>
    </>
  );
};

export default RecipeList;
