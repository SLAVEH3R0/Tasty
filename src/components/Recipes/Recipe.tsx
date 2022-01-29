import React from 'react';
import { IRecipe } from '../../models/IRecipe';

const Recipe: React.FC<IRecipe> = ({
  name,
  ingredients,
  instructions,
  coverImage,
}) => {
  return (
    <>
      <h1>{name}</h1>
      <h2>Ingrédients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <ol>
        {instructions.map((instruction, index) => (
          <li>{instruction}</li>
        ))}
      </ol>
      <img src={coverImage} alt={name} />
    </>
  );
};

export default Recipe;
