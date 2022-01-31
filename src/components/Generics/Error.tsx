import React from 'react';
import { ErrorPage } from '../../styles/generic/Error.styles';

const Error: React.FC = () => {
  return (
    <>
      <ErrorPage>
        <h1>404</h1>
        <p>Page non trouvée</p>
        <p>☠</p>
      </ErrorPage>
    </>
  );
};

export default Error;
