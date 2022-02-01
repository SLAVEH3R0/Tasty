import styled, { css } from 'styled-components';
import { Category, Difficulty, Protein } from '../../models/IRecipe';

interface IPropsDifficulty {
  difficultyLevel: Difficulty;
}

interface IPropsCategory {
  category: Category;
}

interface IPropsProtein {
  protein: Protein;
}

export const Card = styled.div<IPropsDifficulty>`
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px;
  width: 320px;

  ${(props) =>
    props.difficultyLevel == Difficulty.Easy &&
    css`
      box-shadow: 0 2px 20px rgba(165, 220, 150, 0.8);

      h1 {
        font-size: 1.5rem;
        color: rgba(110, 220, 80, 0.8);
      }
    `};
  ${(props) =>
    props.difficultyLevel == Difficulty.Medium &&
    css`
      box-shadow: 0 2px 20px rgba(220, 180, 130, 0.8);

      h1 {
        font-size: 1.5rem;
        color: rgba(220, 150, 65, 0.8);
      }
    `};
  ${(props) =>
    props.difficultyLevel == Difficulty.Hard &&
    css`
      box-shadow: 0 3px 30px rgba(220, 150, 150, 0.8);

      h1 {
        font-size: 1.5rem;
        color: rgba(220, 65, 65, 0.8);
      }
    `};
`;

export const CardHeader = styled.div`
  img {
    width: 320px;
    height: 180px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;

  div.name-prot {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    span {
      margin: auto;
    }
  }

  p {
    font-size: 13px;
  }
`;

export const Tag = styled.span<IPropsCategory>`
  background: #cccccc;
  border: 1px solid #000;
  border-radius: 50px;
  font-size: 12px;
  margin: 0 2px 0 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;

  ${(props) =>
    props.category == Category.Favorites &&
    css`
      background-color: red;
    `};
  ${(props) =>
    props.category == Category.Vegetarian &&
    css`
      background-color: green;
    `};
`;

export const ProteinTag = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  padding: 0 2px;
`;
