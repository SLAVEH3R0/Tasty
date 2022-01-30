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
  Fish,
  Chicken,
  Pork,
  Beef,
  Seafood,
  Eggs,
  Tofu,
  Other
}