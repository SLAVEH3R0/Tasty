import React from 'react';
import { IRecipe } from '../../models/IRecipe';
import '../../styles/RecipeCard.styles';
import { Card, CardTitle } from '../../styles/RecipeCard.styles';

const RecipeCard: React.FC<IRecipe> = ({
  name,
  coverImage,
  portions,
  cookingTime,
  preparationTime,
  difficulty,
  categorie,
  protein,
}) => {
  return (
    <Card difficultyLevel={difficulty}>
      <img src={coverImage} alt={name} />
      <CardTitle>{name}</CardTitle>
      <h2>{portions}</h2>
      <h3>Ready in : {cookingTime + preparationTime}m</h3>
      <h4>{difficulty}</h4>
      <h4>{categorie}</h4>
      <h4>{protein}</h4>
    </Card>
  );
};

export default RecipeCard;
