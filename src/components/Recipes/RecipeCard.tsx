import React from 'react';
import '../../css/RecipeCard.css';
import { IRecipe, Protein } from '../../models/IRecipe';
import {
  Card,
  CardBody,
  CardHeader,
  ProteinTag,
  Tag,
} from '../../styles/recipe/RecipeCard.styles';

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
        <div className="tag">
          {category.map((value, index) => {
            return (
              <Tag key={index} category={value}>
                {value}
              </Tag>
            );
          })}
        </div>
        <div className="name-prot">
          <h1>{name}</h1>
          {protein.map((value, index) => {
            return (
              <ProteinTag key={index}>{getProteinImage(value)}</ProteinTag>
            );
          })}
        </div>
        <div>
          <p>
            Portions pour {portions} {portions > 1 ? 'personnes' : 'personne'}
          </p>
          <p>
            Prêt en : {getTotalPrepTimeFormat(cookingTime, preparationTime)}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

function getProteinImage(protein: Protein) {
  switch (protein) {
    case Protein.Fish:
      return (
        <img
          src="https://cdn-icons.flaticon.com/png/512/3347/premium/3347354.png?token=exp=1643687310~hmac=fec0b0c93512ee5f1dc3d464e12e3a7c"
          alt="Fish icon"
        />
      );
    case Protein.Chicken:
      return (
        <img
          src="https://cdn-icons.flaticon.com/png/512/2863/premium/2863548.png?token=exp=1643685838~hmac=7c30b01c30b4f54a25ae26b6146daa6b"
          alt="Chicken icon"
        />
      );
    case Protein.Pork:
      return (
        <img
          src="https://cdn-icons-png.flaticon.com/512/1582/1582218.png"
          alt="Pork icon"
        />
      );
    case Protein.Beef:
      return (
        <img
          src="https://cdn-icons.flaticon.com/png/512/821/premium/821121.png?token=exp=1643687400~hmac=9221a8db71774ce8b9eabf1b418818a8"
          alt="Beef icon"
        />
      );
    case Protein.Seafood:
      return (
        <img
          src="https://cdn-icons.flaticon.com/png/512/3280/premium/3280074.png?token=exp=1643687515~hmac=480d496e593187d65750acc6023a997f"
          alt="Seafood icon"
        />
      );
    case Protein.Eggs:
      return (
        <img
          src="https://cdn-icons-png.flaticon.com/512/702/702559.png"
          alt="Eggs icon"
        />
      );
    case Protein.Tofu:
      return (
        <img
          src="https://cdn-icons.flaticon.com/png/512/2732/premium/2732120.png?token=exp=1643687620~hmac=ee1559708b696e941074ee865bd8cf51"
          alt="Tofu icon"
        />
      );
    default:
      return (
        <img
          src="https://cdn-icons.flaticon.com/png/512/4257/premium/4257216.png?token=exp=1643687191~hmac=2905f50e83a7145429503a08af913440"
          alt="Autres protéines"
        />
      );
  }
}

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
