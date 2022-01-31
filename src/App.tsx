import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Error from './components/Generics/Error';
import Main from './components/Generics/Main';
import RecipeList from './components/Recipes/RecipeList';
import { Container } from './styles/shared/Container.styles';
import { Nav } from './styles/shared/Nav.styles';

function App() {
  return (
    <Router>
      <header>
        <Nav>
          <ul>
            <li>
              <NavLink end to="tasty">
                Acceuil
              </NavLink>
            </li>
            <li>
              <NavLink end to="tasty/list">
                Toutes les recettes
              </NavLink>
            </li>
          </ul>
        </Nav>
      </header>
      <main>
        <Container>
          <Routes>
            <Route path="tasty" element={<Main />} />
            <Route path="tasty/list" element={<RecipeList />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
