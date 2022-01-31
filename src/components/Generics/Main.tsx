import React from 'react';
import { MainPage } from '../../styles/generic/Main.styles';

const Main: React.FC = () => {
  return (
    <>
      <MainPage>
        <h1>Acceuil</h1>
        <p>Bienvenue a notre belle application TS</p>
        <img
          src="https://www.scarymommy.com/wp-content/uploads/2020/08/gordon-ramsay-memes-quotes.jpg"
          alt="Picture of Gordon Ramsay"
        />
        <h2>
          🥓🥓 <a href="tasty/list">Now let's cook</a> 🥓🥓
        </h2>
      </MainPage>
    </>
  );
};

export default Main;
