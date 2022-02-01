export interface IRecipe{
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  coverImage: string;
  imageGalery: string[];
  portions: number;
  preparationTime: number;
  cookingTime: number;
  difficulty: Difficulty;
  category: Category[];
  protein: Protein[];
}

export enum Difficulty{
  Easy = 'Facile',
  Medium = 'Moyen',
  Hard = 'Difficile'
}

export enum Category{
  Favorites = 'Favoris',
  Vegetarian = 'Végétarien',
  Apetizer = 'Entrée',
  Dessert = 'Dessert',
  MainCourse = 'Plat principal',
}

export enum Protein{
  Fish = 'Poisson',
  Chicken = 'Poulet',
  Pork = 'Porc',
  Beef = 'Boeuf',
  Seafood = 'Fruits de mer',
  Eggs = 'Oeufs',
  Tofu = 'Tofu',
  Other = 'Autre',
}