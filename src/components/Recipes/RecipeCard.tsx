import React from 'react';
import '../../css/RecipeCard.css';
import { IRecipe } from '../../models/IRecipe';
import '../../styles/RecipeCard.styles';
import {
  Card,
  CardBody,
  CardHeader,
  Tag,
} from '../../styles/RecipeCard.styles';

const RecipeCard: React.FC<IRecipe> = ({
  name,
  coverImage,
  portions,
  cookingTime,
  preparationTime,
  difficulty,
  category,
  protein,
}) => {
  return (
    <Card difficultyLevel={difficulty}>
      <CardHeader>
        <img src={coverImage} alt={name} />
      </CardHeader>
      <CardBody>
        <div>
          {category.map((value, index) => {
            return (
              <Tag key={index} category={value}>
                {value}
              </Tag>
            );
          })}
        </div>
        <h1>{name}</h1>
        <p>
          Portions pour {portions} {portions > 1 ? 'personnes' : 'personne'}
        </p>
        <h3>
          Prêt en : {getTotalPrepTimeFormat(cookingTime, preparationTime)}
        </h3>
        <h4>{protein}</h4>
      </CardBody>
    </Card>
  );
};

function getTotalPrepTimeFormat(
  preparationTime: number,
  cookingTime: number
): string {
  var totalTime = preparationTime + cookingTime;
  if (totalTime < 60) {
    return `${totalTime} ${totalTime > 1 ? 'minutes' : 'minute'}`;
  }

  var hours = Math.floor(totalTime / 60);
  var minutes = totalTime % 60;

  return `${hours} ${hours > 1 ? 'heures' : 'heure'} ${
    minutes > 0 ? `${minutes} ${minutes > 1 ? 'minutes' : 'minute'}` : ''
  }`;
}

export default RecipeCard;
