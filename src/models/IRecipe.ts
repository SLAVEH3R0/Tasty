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
  categorie: Categorie[];
  protein: Protein[];
}

export enum Difficulty{
  Easy = 'Facile',
  Medium = 'Moyen',
  Hard = 'Difficile'
}

export enum Categorie{
  Favorites,
  Vegetarian,
  Apetizer,
  Dessert,
  MainCourse
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