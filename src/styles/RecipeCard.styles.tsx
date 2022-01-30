import styled, { css } from 'styled-components';
import { Difficulty } from '../models/IRecipe';

interface IProps {
  difficultyLevel: Difficulty;
}

export const Card = styled.div<IProps>`
  ${(props) =>
    props.difficultyLevel == Difficulty.Easy &&
    css`
      background-color: green;
    `}

  ${(props) =>
    props.difficultyLevel == Difficulty.Medium &&
    css`
      background-color: yellow;
    `}

    ${(props) =>
    props.difficultyLevel == Difficulty.Hard &&
    css`
      background-color: red;
    `}
`;

export const CardTitle = styled.h1`
  color: blue;
`;
