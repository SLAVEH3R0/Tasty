import React, { useEffect, useState } from 'react';
import { IRecipe } from '../../models/IRecipe';
import jsonData from '../../resources/recipes.json';
import { Container } from '../../styles/RecipeList.styles';
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
      <Container>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
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
            category={recipe.category}
            protein={recipe.protein}
          />
        ))}
      </Container>
    </>
  );
};

export default RecipeList;
