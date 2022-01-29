import React from 'react';
import { IRecipe } from '../../models/IRecipe';
import jsonData from '../../resources/recipes.json';
import Recipe from './Recipe';

const RecipeList: React.FC = () => {
  const recipes: Array<IRecipe> = JSON.parse(JSON.stringify(jsonData));

  return (
    <>
      <h1>Liste de recettes</h1>
      <ul>
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
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
