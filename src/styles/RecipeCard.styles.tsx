import styled, { css } from 'styled-components';
import { Category, Difficulty } from '../models/IRecipe';

interface IPropsDifficulty {
  difficultyLevel: Difficulty;
}

interface IPropsCategory {
  category: Category;
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
    `};
  ${(props) =>
    props.difficultyLevel == Difficulty.Medium &&
    css`
      box-shadow: 0 2px 20px rgba(220, 180, 130, 0.8);
    `};
  ${(props) =>
    props.difficultyLevel == Difficulty.Hard &&
    css`
      box-shadow: 0 3px 30px rgba(220, 150, 150, 0.8);
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

  p {
    font-size: 13px;
    margin: 0 0 40px;
  }
`;

export const Tag = styled.span<IPropsCategory>`
  background: #cccccc;
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
